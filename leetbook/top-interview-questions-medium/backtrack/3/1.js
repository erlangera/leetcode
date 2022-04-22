/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [[]];
  for (let i = 0; i < nums.length; ++i) {
    res = res.reduce((result, item) => {
      let temp = [];
      for (let j = 0; j <= item.length; ++j) {
        let t = [...item];
        t.splice(j, 0, nums[i]);
        temp.push(t);
      }
      return result.concat(temp);
    }, new Array());
  }
  return res;
};
