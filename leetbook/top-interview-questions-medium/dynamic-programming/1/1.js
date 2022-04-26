/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let index = 0,
    maxReach = 0;
  while (index <= maxReach) {
    if (nums[index] + index > maxReach) {
      maxReach = nums[index] + index;
    }
    if (maxReach >= nums.length - 1) {
      return true;
    }
    index++;
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 性能问题
  const reach = [0];
  while (reach.length) {
    const head = reach.shift();
    const step = nums[head];
    if (head + step >= nums.length - 1) {
      return true;
    }
    for (let i = 1; i <= step; ++i) {
      const next = head + i;
      if (!reach.includes(next)) {
        reach.push(next);
      }
    }
  }
  return false;
};
