/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.origin = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.origin;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const copy = [...this.origin];
  for (let i = 0; i < copy.length; ++i) {
    const k = Math.floor(Math.random() * (i + 1));
    copy[i] = copy[k];
    copy[k] = this.origin[i];
  }
  return copy;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
