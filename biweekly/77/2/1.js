/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function (nums) {
  const left = new Array(nums.length);
  const right = new Array(nums.length);
  let sum1 = 0,
    sum2 = 0;
  for (let i = 0; i < nums.length; ++i) {
    sum1 += nums[i];
    left[i] = sum1;
    right[nums.length - 1 - i] = sum2;
    sum2 += nums[nums.length - 1 - i];
  }
  for (let i = 0; i < nums.length; ++i) {
    left[i] = Math.abs(
      Math.floor(left[i] / (i + 1)) -
        (i === nums.length - 1
          ? 0
          : Math.floor(right[i] / (nums.length - 1 - i)))
    );
  }
  let min = left[0],
    res = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (min > left[i]) {
      min = left[i];
      res = i;
    }
  }
  return res;
};
