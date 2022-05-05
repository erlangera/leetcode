/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const countMap = {};
  for (let i = 0; i < t.length; ++i) {
    countMap[t[i]] = t[i] in countMap ? countMap[t[i]] + 1 : 1;
  }
  let slow = -1,
    fast = 0,
    res = '';
  while (fast < s.length) {
    if (s[fast] in countMap) {
      --countMap[s[fast]];
      if (slow === -1) {
        slow = fast;
      }
      if (
        countMap[s[fast]] === 0 &&
        Object.values(countMap).every((item) => item <= 0)
      ) {
        if (!res || res.length > fast - slow + 1) {
          res = s.slice(slow, fast + 1);
        }
        // 调整slow
        let twiceFlag = true;
        while (slow < fast) {
          if (s[slow] in countMap) {
            ++countMap[s[slow]];
            if (countMap[s[slow]] > 0) {
              if (twiceFlag) {
                twiceFlag = false;
              } else {
                --countMap[s[slow]];
                break;
              }
            }
          }
          if (twiceFlag && res.length > fast - slow) {
            res = s.slice(slow + 1, fast + 1);
          }
          ++slow;
        }
      }
    }
    ++fast;
  }
  return res;
};
