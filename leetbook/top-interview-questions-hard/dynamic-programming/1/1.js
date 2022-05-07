/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const list = [];
  for (let num of nums) {
    if (num > 0 && list[list.length - 1] > 0) {
      list[list.length - 1] *= num;
    } else {
      list.push(num);
    }
  }
  console.log(list);
  const dp = [[list[0], list[0]]];
  let res = dp[0][1];
  for (let i = 1; i < list.length; ++i) {
    const [preMin, preMax] = dp[i - 1];
    dp.push([
      Math.min(preMin * list[i], preMax * list[i], list[i]),
      Math.max(preMin * list[i], preMax * list[i], list[i]),
    ]);
    if (res < dp[i][1]) {
      res = dp[i][1];
    }
  }
  return res;
};
