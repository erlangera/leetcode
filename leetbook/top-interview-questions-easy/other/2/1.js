/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  const res = x ^ y;
  return res
    .toString(2)
    .split('')
    .filter((i) => i === '1').length;
};
