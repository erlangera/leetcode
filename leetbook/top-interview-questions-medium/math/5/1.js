/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  let start = 1,
    end = Math.floor(x / 2);
  while (start < end) {
    const middle = Math.ceil((start + end) / 2);
    const temp = middle * middle;
    if (temp < x) {
      start = middle;
    } else if (temp > x) {
      if (middle === end) {
        return start;
      } else {
        end = middle;
      }
    } else {
      return middle;
    }
  }
  return start;
};
