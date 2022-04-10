/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // 反转指定范围数组
  function reverse(arr, start, end) {
    if (start > end) return;

    // 需要转换的次数
    const steps = Math.floor((end - start + 1) / 2);
    let temp;
    for (let i = 0; i < steps; ++i) {
      temp = arr[start + i];
      arr[start + i] = arr[end - i];
      arr[end - i] = temp;
    }
  }

  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};
