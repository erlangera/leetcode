/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/\W|_/g, '').toLowerCase();

  for (let i = 0; i < s.length / 2; ++i) {
    if (s[i] !== s[s.length - i - 1]) return false;
  }
  return true;
};

var isPalindrome = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    while (s[i] && !/^[a-zA-Z0-9]$/.test(s[i])) {
      ++i;
    }
    while (s[j] && !/^[a-zA-Z0-9]$/.test(s[j])) {
      --j;
    }

    if (i >= j) return true;

    if (s[i].toLowerCase() != s[j].toLowerCase()) {
      return false;
    } else {
      ++i;
      --j;
    }
  }
  return true;
};
