/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    const middle = Math.ceil((start + end) / 2);
    if (nums[middle] < target) {
      start = middle;
    } else {
      if (end === middle) {
        if (nums[start] < target) {
          start = end;
        } else {
          end = start;
        }
      } else {
        end = middle;
      }
    }
  }
  if (nums[start] !== target) return [-1, -1];
  const res = [start];

  end = nums.length - 1;
  while (start < end) {
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] > target) {
      end = middle;
    } else {
      if (start === middle) {
        if (nums[end] > target) {
          end = start;
        } else {
          start = end;
        }
      } else {
        start = middle;
      }
    }
  }
  res.push(start);
  return res;
};
