/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let res = 0;
  for (let i = 0; i < words.length; ++i) {
    if (s.startsWith(words[i])) {
      res++;
    }
  }
  return res;
};
