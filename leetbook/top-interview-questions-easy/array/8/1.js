/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroIndex = 0;
  const length = nums.length;
  while (zeroIndex < length && nums[zeroIndex]) {
    zeroIndex++;
  }
  let nonzeroIndex = zeroIndex + 1;
  while (nonzeroIndex < length) {
    if (nums[nonzeroIndex] !== 0) {
      nums[zeroIndex] = nums[nonzeroIndex];
      nums[nonzeroIndex] = 0;
      zeroIndex++;
    } else {
      nonzeroIndex++;
    }
  }
};
