/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  while (nums[0] != nums[nums[0]]) {
    const temp = nums[nums[0]];
    nums[nums[0]] = nums[0];
    nums[0] = temp;
  }
  return nums[0];
};
