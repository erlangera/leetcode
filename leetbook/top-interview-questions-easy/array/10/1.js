/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; ++i) {
    const rowSet = new Set(),
      colSet = new Set();
    for (let j = 0; j < 9; ++j) {
      // row
      if (board[i][j] !== '.') {
        if (rowSet.has(board[i][j])) {
          return false;
        } else {
          rowSet.add(board[i][j]);
        }
      }
      // col
      if (board[j][i] !== '.') {
        if (colSet.has(board[j][i])) {
          return false;
        } else {
          colSet.add(board[j][i]);
        }
      }
    }
  }
  // square
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const set = new Set();
      for (let k = 0; k < 3; ++k) {
        for (let g = 0; g < 3; ++g) {
          if (board[i + k][j + g] !== '.') {
            if (set.has(board[i + k][j + g])) {
              return false;
            } else {
              set.add(board[i + k][j + g]);
            }
          }
        }
      }
    }
  }
  return true;
};
