/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;

  //在后一天计算如果能盈利就在前一天买入
  let i = 1,
    res = 0,
    length = prices.length;
  while (i < length) {
    if (prices[i] > prices[i - 1]) {
      res += prices[i] - prices[i - 1];
    }
    i++;
  }

  return res;
};
