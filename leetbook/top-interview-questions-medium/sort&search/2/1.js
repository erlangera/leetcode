/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const temp = {};
  for (let i = 0; i < nums.length; ++i) {
    const key = nums[i];
    temp[key] = temp[key] ? temp[key] + 1 : 1;
  }
  return Object.entries(temp)
    .sort(([key1, value1], [key2, value2]) => value2 - value1)
    .map(([key, value]) => key)
    .slice(0, k);
};
