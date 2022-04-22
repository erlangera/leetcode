/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[]];
  for (let i = 0; i < nums.length; ++i) {
    res = res.concat(res.map((item) => [...item, nums[i]]));
  }
  return res;
};
