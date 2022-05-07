/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = Array(prices.length);
  dp[0] = [-prices[0], 0, 0];
  for (let i = 1; i < dp.length; ++i) {
    const [holdMax, disableMax, enableMax] = dp[i - 1];
    dp[i] = [
      Math.max(holdMax, enableMax - prices[i]),
      holdMax + prices[i],
      Math.max(disableMax, enableMax),
    ];
  }

  return Math.max(...dp[dp.length - 1]);
};
