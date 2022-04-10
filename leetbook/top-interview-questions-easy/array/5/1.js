/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = nums[0];
  let i = 1;
  const length = nums.length;
  while (i < length) {
    res ^= nums[i];
    i++;
  }

  return res;
};
