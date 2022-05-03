/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  function search(arr, val) {
    let start = 0,
      end = arr.length - 1;
    while (start < end) {
      const middle = Math.ceil((start + end) / 2);
      if (arr[middle] < val) {
        start = middle;
      } else if (arr[middle] > val) {
        if (middle === end) {
          if (arr[start] < val) {
            return end;
          } else {
            return start;
          }
        } else {
          end = middle;
        }
      } else {
        return middle;
      }
    }
    return arr[start] < val ? start + 1 : start;
  }
  const temp = nums.slice(0, k);
  temp.sort((a, b) => a - b);
  const res = [temp[k - 1]];
  for (let i = k; i < nums.length; ++i) {
    // 推出
    temp.splice(search(temp, nums[i - k]), 1);
    // 插入
    temp.splice(search(temp, nums[i]), 0, nums[i]);
    res.push(temp[k - 1]);
  }
  return res;
};
