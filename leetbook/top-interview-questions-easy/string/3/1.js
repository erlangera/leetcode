/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const first = {},
    twice = {};
  for (let i = 0; i < s.length; ++i) {
    if (!(s[i] in twice)) {
      if (s[i] in first) {
        twice[s[i]] = true;
        delete first[s[i]];
      } else {
        first[s[i]] = i;
      }
    }
  }
  const index = Object.values(first);
  if (index.length === 0) {
    return -1;
  } else {
    return Math.min(...index);
  }
};
