/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let current = nums[0],
    count = 1;
  for (let i = 1; i < nums.length; ++i) {
    if (current === nums[i]) {
      ++count;
    } else {
      --count;
    }
    if (count < 0) {
      current = nums[i];
      count = 1;
    }
  }
  return current;
};
