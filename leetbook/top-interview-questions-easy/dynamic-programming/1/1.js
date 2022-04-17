/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let pre = 1,
    current = 1,
    temp;
  for (let i = 1; i < n; ++i) {
    temp = current;
    current = current + pre;
    pre = temp;
  }
  return current;
};
