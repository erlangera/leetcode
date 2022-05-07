/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const list = [],
    max = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= max; ++i) {
    list.push(i * i);
  }

  const dp = Array(n + 1).fill(0);
  for (let s of list) {
    dp[s] = 1;
  }

  for (let i = 1; i < dp.length; ++i) {
    if (!dp[i]) {
      let min = i;
      for (let s of list) {
        if (i - s >= 0 && dp[i - s] < min) {
          min = dp[i - s];
        }
      }
      dp[i] = min + 1;
    }
  }

  return dp[n];
};
