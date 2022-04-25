/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  return search(matrix, target, 0, 0, matrix.length - 1, matrix[0].length - 1);
};

function search(matrix, target, x1, y1, x2, y2) {
  if (x1 === x2 && y1 === y2) return matrix[x1][y1] === target;

  let sx = x1,
    sy = y1,
    ex = x2,
    ey = y2;
  while (sx < ex && sy < ey) {
    const x = Math.ceil((sx + ex) / 2);
    const y = Math.ceil((sy + ey) / 2);
    if (matrix[x][y] < target) {
      sx = x;
      sy = y;
    } else if (matrix[x][y] > target) {
      if (ex == x && ey == y) {
        if (matrix[sx][sy] === target) {
          return true;
        }
        if (sx === ex) {
          return (
            (y !== y1 && search(matrix, target, x, y1, x2, y - 1)) ||
            (x !== x1 && search(matrix, target, x1, y, x - 1, y2))
          );
        }
        return (
          search(matrix, target, x, y1, x2, y - 1) ||
          search(matrix, target, x1, y - 1, x, y2)
        );
      } else {
        ex = x;
        ey = y;
      }
    } else {
      return true;
    }
  }
  return false;
}
