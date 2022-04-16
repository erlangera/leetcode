/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let list = Array(n).fill(true);
  let count = 0;
  for (let i = 2; i < list.length; ++i) {
    if (list[i]) {
      count++;
      for (let j = i * 2; j < list.length; j += i) {
        list[j] = false;
      }
    }
  }

  return count;
};
