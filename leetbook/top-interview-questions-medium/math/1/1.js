/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true;
  const history = new Set();
  while (!history.has(n)) {
    history.add(n);
    n = n
      .toString()
      .split('')
      .map((item) => Number(item) * Number(item))
      .reduce((res, item) => res + item);
    if (n === 1) return true;
  }
  return false;
};
