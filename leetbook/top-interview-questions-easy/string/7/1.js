/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;

  let i = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[0]) {
      let j = 0;
      while (j < needle.length) {
        if (haystack[i + j] === needle[j]) {
          j++;
        } else {
          break;
        }
      }
      if (j === needle.length) {
        return i;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
  return -1;
};
