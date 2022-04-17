/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.push(-1);
  let temp,
    n = nums.length,
    start = 0,
    end = n - 1;
  while (start < end) {
    if (start === nums[start]) {
      start++;
    } else {
      // 交换
      temp = nums[start];
      if (temp === -1) {
        // 异常数移动到最后非正确对应位置
        while (start < end) {
          if (end === nums[end]) {
            end--;
          } else {
            nums[start] = nums[end];
            nums[end] = -1;
            break;
          }
        }
      } else {
        nums[start] = nums[temp];
        nums[temp] = temp;
      }
    }
  }
  return start;
};
