/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let current = 0,
    temp = [],
    res = 0,
    index;
  while (current < s.length) {
    index = temp.indexOf(s[current]);
    if (index === -1) {
      temp.push(s[current]);
      res = Math.max(res, temp.length);
    } else {
      temp.splice(0, index + 1);
      temp.push(s[current]);
    }
    current++;
  }
  return res;
};
