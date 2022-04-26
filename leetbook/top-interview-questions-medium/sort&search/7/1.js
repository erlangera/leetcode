/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1,
    head = nums[start];
  if (head === target) {
    return start;
  } else if (head > target) {
    // 在尾部
    while (start < end) {
      const middle = Math.ceil((start + end) / 2);
      if (nums[middle] > target) {
        if (middle === end) {
          if (nums[start] === target) {
            return start;
          } else {
            return -1;
          }
        } else {
          if (nums[middle] > head) {
            start = middle;
          } else {
            end = middle;
          }
        }
      } else if (nums[middle] < target) {
        start = middle;
      } else {
        return middle;
      }
    }
  } else {
    // 在头部
    while (start < end) {
      const middle = Math.ceil((start + end) / 2);
      if (nums[middle] > target || nums[middle] < head) {
        if (middle === end) {
          if (nums[start] === target) {
            return start;
          } else {
            return -1;
          }
        } else {
          end = middle;
        }
      } else if (nums[middle] < target) {
        start = middle;
      } else {
        return middle;
      }
    }
  }
  return -1;
};
