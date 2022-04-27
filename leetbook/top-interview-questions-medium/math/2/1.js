/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  if (!n) return 0;
  let twoCount = 0;
  fiveCount = 0;
  for (let i = 1; i <= n; ++i) {
    let temp = i;
    while (temp % 2 === 0) {
      twoCount++;
      temp /= 2;
    }
    temp = i;
    while (temp % 5 === 0) {
      fiveCount++;
      temp /= 5;
    }
  }
  return Math.min(twoCount, fiveCount);
};
