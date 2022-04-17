/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0],
    temp = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (temp > 0) {
      temp += nums[i];
    } else {
      temp = nums[i];
    }
    if (temp > res) {
      res = temp;
    }
  }
  return res;
};
