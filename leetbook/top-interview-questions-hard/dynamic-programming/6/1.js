/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  nums = [1, ...nums, 1];
  const dp = Array.from(Array(nums.length), () => Array(nums.length).fill(0));
  for (let i = nums.length - 2; i >= 0; --i) {
    for (let j = i; j < nums.length; ++j) {
      for (let k = i + 1; k < j; ++k) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + nums[i] * nums[k] * nums[j] + dp[k][j]
        );
      }
    }
  }

  return dp[0][nums.length - 1];
};
