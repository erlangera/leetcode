/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b);
  for (
    let i = 1, k = Math.floor((nums.length + 1) / 2);
    i < nums.length;
    i += 2, ++k
  ) {
    const temp = nums[k];
    for (let j = k; j > i; --j) {
      nums[j] = nums[j - 1];
    }
    nums[i] = temp;
  }

  for (let i = 2; i < nums.length; i += 2) {
    if (i + 1 < nums.length && nums[i - 1] === nums[i]) {
      const temp1 = nums[i],
        temp2 = nums[i + 1];

      for (let j = i; j > 1; j -= 2) {
        nums[j] = nums[j - 2];
        nums[j + 1] = nums[j - 1];
      }
    }
    nums[0] = temp1;
    nums[1] = temp2;
  }
};
