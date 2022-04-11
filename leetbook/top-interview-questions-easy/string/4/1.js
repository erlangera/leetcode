/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  function statistics(str) {
    const res = {};
    for (let i = 0; i < str.length; ++i) {
      res[str[i]] = res[str[i]] ? res[str[i]] + 1 : 1;
    }
    return res;
  }

  if (s.length !== t.length) return false;

  const a = statistics(s);
  const b = statistics(t);
  for (let key in a) {
    if (a[key] !== b[key]) return false;
  }
  return true;
};
