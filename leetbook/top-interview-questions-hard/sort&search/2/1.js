/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  if (k === 0) return matrix[0][0];
  if (k === matrix.length * matrix[0].length)
    return matrix[matrix.length - 1][matrix[0].length - 1];
  const indexes = Array(matrix.length).fill(0);
  let count = 0;
  while (count < k) {
    let max = matrix[indexes.length - 1][indexes[indexes.length - 1]];
    for (let i = indexes.length - 1; i >= 0; --i) {
      let j = indexes[i];
      while (j < matrix[0].length && matrix[i][j] <= max) {
        ++j;
        ++count;
      }
      indexes[i] = j;
    }
  }
  if (count === k) {
    return matrix[indexes.length - 1][indexes[indexes.length - 1] - 1];
  } else {
    // 需要前推的个数
    let max, index;
    while (count >= k) {
      max = undefined;
      for (let i = indexes.length - 1; i >= 0; --i) {
        if (indexes[i] > 0) {
          if (max === undefined || max <= matrix[i][indexes[i] - 1]) {
            max = matrix[i][indexes[i] - 1];
            index = i;
          }
        }
      }
      --indexes[index];
      --count;
    }
    return max;
  }
};
