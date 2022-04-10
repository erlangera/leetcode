/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const size = matrix.length;
  const rotateSize = size / 2;
  let temp;
  for (let i = 0; i < rotateSize; ++i) {
    for (let j = i; j < size - i - 1; ++j) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[size - j - 1][i];
      matrix[size - j - 1][i] = matrix[size - i - 1][size - j - 1];
      matrix[size - i - 1][size - j - 1] = matrix[j][size - i - 1];
      matrix[j][size - i - 1] = temp;
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const size = matrix.length;
  // 上下互换
  for (let i = 0; i < size / 2; ++i) {
    const temp = matrix[i];
    matrix[i] = matrix[size - i - 1];
    matrix[size - i - 1] = temp;
  }
  // 转置
  for (let i = 0; i < size; ++i) {
    for (let j = i + 1; j < size; ++j) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
