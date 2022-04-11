/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];

  const minLength = Math.min(...strs.map((str) => str.length));
  let i = 0;
  for (; i < minLength; ++i) {
    const temp = strs[0][i];
    for (let j = 1; j < strs.length; ++j) {
      if (strs[j][i] !== temp) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0].slice(0, i);
};
