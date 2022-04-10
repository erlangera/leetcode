/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const arr = nums.map((val, i) => [val, i]);
  arr.sort((a, b) => a[0] - b[0]);
  let i = 0,
    j = 1,
    length = nums.length;

  while (i < length) {
    j = i + 1;
    while (j < length) {
      if (arr[i][0] + arr[j][0] < target) {
        j++;
      } else if (arr[i][0] + arr[j][0] === target) {
        return [arr[i][1], arr[j][1]];
      } else {
        break;
      }
    }
    i++;
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {},
    length = nums.length;
  for (let i = 0; i < length; ++i) {
    const diff = target - nums[i];
    if (nums[i] in hash) {
      return [hash[nums[i]], i];
    } else {
      hash[diff] = i;
    }
  }
};
