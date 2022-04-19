/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (nums.length < 3) return false;

  // 确定第一小和第二小
  let current = 1;
  while (current < nums.length && nums[current - 1] >= nums[current]) {
    current++;
  }
  if (current === nums.length) return false;
  let min = nums[current - 1],
    second = nums[current],
    third = null;
  current++;

  // 第三个数在不同区间进行调整
  while (current < nums.length) {
    if (nums[current] > second) {
      return true;
    }

    if (third === null) {
      if (nums[current] > min) {
        second = nums[current];
      } else {
        third = nums[current];
      }
    } else {
      if (nums[current] <= third) {
        third = nums[current];
      } else {
        min = third;
        second = nums[current];
        third = null;
      }
    }
    current++;
  }
  return false;
};
