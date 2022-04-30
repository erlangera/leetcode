/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const offsetMap = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const countMap = {
    [-1]: 0, 
    0: 0, 
    1: 1, 
    2: 1
  };
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      let count = 0;
      for (let [x, y] of offsetMap) {
        x += i;
        y += j;
        if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {
          count += countMap[board[x][y]];
        }
      }
      const current = board[i][j];
      if (current) {
        // 活
        if (count !== 2 && count !== 3)
          board[i][j] = 2;
        }
      } else if (count === 3) {
        // 死
        board[i][j] = -1;
      }
    }
  }
  
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] === -1) {
        board[i][j] = 1;
      } else if (board[i][j] === 2) {
        board[i][j] = 0;
      }
    }
  }
};
