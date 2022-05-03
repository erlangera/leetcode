/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 性能问题
  const dp = Array(amount + 1).fill(-1);
  dp[0] = 0;
  for (let i = 1; i < dp.length; ++i) {
    let min = -1;
    for (let coin of coins) {
      if (i >= coin && dp[i - coin] !== -1) {
        min = min === -1 ? dp[i - coin] : Math.min(min, dp[i - coin]);
      }
    }
    min !== -1 && (dp[i] = min + 1);
  }
  return dp[amount];
};

var coinChange = function (coins, amount) {
  // 性能问题
  coins.sort((a, b) => b - a);
  const max = Math.floor(amount / coins[0]);
  const remain = amount % coins[0];
  if (!remain) {
    return max;
  }
  if (coins.length === 1) {
    return -1;
  }
  let min = null;
  for (let i = max; i >= 0; --i) {
    const temp = coinChange(coins.slice(1), amount - coins[0] * i);
    if (temp !== -1) {
      min = min === null || min > temp + i ? temp + i : min;
    }
  }
  return min === null ? -1 : min;
};
