/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length;

  let i = -1,
    j = 0,
    max = nums.length - 1;
  while (j < max) {
    nums[j] !== nums[++j] && (nums[++i] = nums[j - 1]);
  }
  nums[++i] = nums[j];

  return ++i;
};
