/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const res = Array(nums.length).fill(0);
  for (let i = nums.length - 2; i >= 0; --i) {
    const temp = nums[i];
    let j;
    for (j = i + 1; j < nums.length; ++j) {
      if (nums[j] >= temp) {
        nums[j - 1] = nums[j];
      } else {
        break;
      }
    }
    nums[j - 1] = temp;
    res[i] = nums.length - j;
  }
  return res;
};
