/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const row = Array(n).fill(1);
  for (let i = 1; i < m; ++i) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        row[j] = 1;
      } else {
        row[j] += row[j - 1];
      }
      temp += row[j];
    }
  }

  return row[n - 1];
};
