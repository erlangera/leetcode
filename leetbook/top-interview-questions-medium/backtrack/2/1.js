/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const dp = [['']]; // , ['()'], ['()()', '(())']
  for (let i = 1; i <= n; ++i) {
    let temp = [];
    for (let j = 0; j < i; ++j) {
      const left = dp[j].map((item) => `(${item})`);
      const right = dp[i - j - 1];
      for (let l of left) {
        for (let r of right) {
          temp.push(l + r);
        }
      }
    }
    dp.push(temp);
  }
  return dp[n];
};
