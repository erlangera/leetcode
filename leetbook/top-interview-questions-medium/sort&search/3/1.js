/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const list = nums.slice(0, k).sort((a, b) => b - a);
  for (let i = k; i < nums.length; ++i) {
    if (list[k - 1] < nums[i]) {
      // 二分插入
      let start = 0,
        end = k - 1;
      while (start < end) {
        const middle = Math.ceil((start + end) / 2);
        if (list[middle] < nums[i]) {
          if (middle === end) {
            if (list[start] < nums[i]) {
              end = start;
            } else {
              start = end;
            }
          } else {
            end = middle;
          }
        } else if (list[middle] > nums[i]) {
          start = middle;
        } else {
          start = end = middle;
        }
      }
      list.pop();
      list.splice(start, 0, nums[i]);
    }
  }
  return list[k - 1];
};
