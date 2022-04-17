/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let current = 0,
    pre = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] + pre > current) {
      const temp = current;
      current = nums[i] + pre;
      pre = temp;
    } else {
      pre = current;
    }
  }
  return current;
};
