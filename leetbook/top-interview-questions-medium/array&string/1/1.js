/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);

  let index = 0;
  // 非负数开始
  while (nums[index] < 0) {
    index++;
  }

  const res = [];
  if (index < 2) {
    index = 2;
  }
  while (index < nums.length) {
    const current = nums[index];
    // 前面重复数量
    let count = 0,
      i = index - 1;
    while (i >= 0 && nums[i] === current) {
      count++;
      i--;
    }
    // 根据重复数进行处理
    if (count === 0) {
      // 在前面找两个数之和为-current的组合
      let start = 0,
        end = index - 1;
      while (start < end) {
        if (nums[start] + nums[end] < -current) {
          start++;
        } else if (nums[start] + nums[end] > -current) {
          end--;
        } else {
          res.push([nums[start], nums[end], current]);
          const temp1 = nums[start];
          const temp2 = nums[end];
          while (nums[start] === temp1) {
            start++;
          }
          while (nums[end] === temp2) {
            end--;
          }
        }
      }
    } else if (count === 1) {
      // 在前面找一个数为-current*2，二分查找
      let start = 0,
        end = index - 2;
      while (start < end) {
        const middle = Math.ceil((start + end) / 2);
        if (nums[middle] < -current * 2) {
          start = middle;
        } else if (nums[middle] > -current * 2) {
          if (end === middle) {
            end = start;
          } else {
            end = middle;
          }
        } else {
          res.push([-current * 2, current, current]);
          break;
        }
      }
      if (start === end && nums[start] === -current * 2) {
        res.push([-current * 2, current, current]);
      }
    } else if (count === 2) {
      if (current === 0) {
        res.push([0, 0, 0]);
      }
    }
    index++;
  }
  return res;
};
