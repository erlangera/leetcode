/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  function search(matrix, i, j, dp) {
    const offsets = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ];
    if (dp[i][j]) return dp[i][j];
    let res = 1;
    for (let [x, y] of offsets) {
      x += i;
      y += j;
      if (
        x >= 0 &&
        x < matrix.length &&
        y >= 0 &&
        y < matrix[0].length &&
        matrix[x][y] > matrix[i][j]
      ) {
        res = Math.max(res, search(matrix, x, y, dp) + 1);
      }
    }
    dp[i][j] = res;
    return res;
  }
  let res = 1;
  let dp = Array(matrix.length).fill(0);
  for (let i = 0; i < dp.length; ++i) {
    dp[i] = Array(matrix[0].length).fill(0);
  }
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      if (!dp[i][j]) {
        search(matrix, i, j, dp);
      }
      res = Math.max(res, dp[i][j]);
    }
  }
  return res;
};
