/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  if (nums.length < 2) return false;
  // 排序法
  nums.sort();
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] == nums[i - 1]) {
      return true;
    }
  }
  return false;

  // Set(hash法)
  const temp = new Set();
  for (let i = 0; i < nums.length; ++i) {
    if (temp.has(nums[i])) {
      return true;
    } else {
      temp.add(nums[i]);
    }
  }
  return false;
};
