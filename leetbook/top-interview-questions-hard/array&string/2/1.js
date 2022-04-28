/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let x = 0,
    y = 0,
    direction = matrix[0].length > 1 ? 'right' : 'down',
    top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1,
    left = 0,
    res = [matrix[x][y]];
  while (true) {
    switch (direction) {
      case 'right':
        if (y === right) return res;
        while (y < right) {
          ++y;
          res.push(matrix[x][y]);
        }
        top = x + 1;
        direction = 'down';
        break;
      case 'down':
        if (x === bottom) return res;
        while (x < bottom) {
          ++x;
          res.push(matrix[x][y]);
        }
        right = y - 1;
        direction = 'left';
        break;
      case 'left':
        if (y === left) return res;
        while (y > left) {
          --y;
          res.push(matrix[x][y]);
        }
        bottom = x - 1;
        direction = 'up';
        break;
      case 'up':
        if (x === top) return res;
        while (x > top) {
          --x;
          res.push(matrix[x][y]);
        }
        left = y + 1;
        direction = 'right';
        break;
      default:
        break;
    }
  }
};
