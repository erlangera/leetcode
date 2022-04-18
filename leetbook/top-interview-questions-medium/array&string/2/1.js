/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = [];
  const cols = [];
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      if (matrix[i][j] === 0) {
        if (!rows.includes(i)) rows.push(i);
        if (!cols.includes(j)) cols.push(j);
      }
    }
  }
  for (let row of rows) {
    matrix[row].fill(0);
  }
  for (let col of rows) {
    for (let row of matrix) {
      row[col] = 0;
    }
  }
};
