/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // first/middle 从前往后找1, 2; last从后往前找0, 1
  let first = 0,
    last = nums.length - 1,
    middle;
  while (first < last) {
    while (first < last && nums[first] === 0) {
      first++;
    }
    while (last > first && nums[last] === 2) {
      last--;
    }
    if (first === last) return;

    const f = nums[first],
      l = nums[last];
    if (f === 2) {
      nums[first] = l;
      nums[last] = f;
    } else {
      if (l === 0) {
        nums[first] = l;
        nums[last] = f;
      } else {
        // 两个1，需要在找个非1
        middle = first + 1;
        while (middle < last && nums[middle] === 1) {
          middle++;
        }
        if (middle === last) return;
        if (nums[middle] === 0) {
          nums[middle] = f;
          nums[first] = 0;
        } else {
          nums[middle] = l;
          nums[last] = 2;
        }
      }
    }
  }
};

// 取巧统计一遍在重新赋值
