/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0,
    end,
    res = '';
  while (start < s.length) {
    end = start;
    while (end < s.length && s[end] === s[start]) {
      end++;
    }
    let i = start - 1,
      j = end;
    while (i > -1 && j < s.length) {
      if (s[i] === s[j]) {
        i--;
        j++;
      } else {
        break;
      }
    }
    if (res.length < j - i - 1) {
      res = s.slice(i + 1, j);
    }
    start = end;
  }
  return res;
};

var longestPalindrome = function (s) {
  // 动态规划
  // TODO
};
