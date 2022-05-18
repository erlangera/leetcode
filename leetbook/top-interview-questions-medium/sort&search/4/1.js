/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length === 1 || nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  let start = 1,
    end = nums.length - 2;
  while (start <= end) {
    const middle = Math.ceil((start + end) / 2);
    if (nums[middle] > nums[middle - 1] && nums[middle] > nums[middle + 1]) {
      return middle;
    } else if (nums[middle] < nums[middle - 1]) {
      if (end === middle) {
        end = start;
      } else {
        end = middle;
      }
    } else {
      start = middle;
    }
  }
};
