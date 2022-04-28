/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = [1];
  for (let i = 1; i < nums.length; ++i) {
    res.push(res[i - 1] * nums[i - 1]);
  }
  let temp = 1;
  for (let i = nums.length - 2; i >= 0; --i) {
    temp *= nums[i + 1];
    res[i] *= temp;
  }
  return res;
};
