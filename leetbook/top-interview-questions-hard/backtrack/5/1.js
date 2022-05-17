/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (p.startsWith('*')) return false;

  s = 'a' + s;
  p = 'a' + p;

  const dp = Array.from(Array(p.length), () => Array(s.length).fill(false));
  for (let i = 0; i < p.length; ++i) {
    for (let j = 0; j < s.length; ++j) {
      switch (p[i]) {
        case '.':
          dp[i][j] = i === 0 ? j === 0 : j > 0 && dp[i - 1][j - 1];
          break;
        case '*':
          dp[i][j] =
            i === 0
              ? false
              : (i > 1 && dp[i - 2][j]) ||
                dp[i - 1][j] ||
                (j > 0 &&
                  (p[i - 1] === s[j] || p[i - 1] === '.') &&
                  (dp[i - 1][j - 1] || dp[i][j - 1]));
          break;
        default:
          dp[i][j] =
            p[i] === s[j] && (i === 0 ? j === 0 : j > 0 && dp[i - 1][j - 1]);
          break;
      }
    }
  }
  return dp[p.length - 1][s.length - 1];
};
