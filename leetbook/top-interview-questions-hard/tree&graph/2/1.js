/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  function spread(board, x, y, mark) {
    const offsetMap = [
      [-1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ];
    const queue = [[x, y]];
    while (queue.length) {
      const [a, b] = queue.pop();
      if (!(a in mark)) {
        mark[a] = {};
      }
      mark[a][b] = true;
      for (let [i, j] of offsetMap) {
        i += a;
        j += b;
        if (
          i >= 0 &&
          i < board.length &&
          j >= 0 &&
          j < board[0].length &&
          board[i][j] === 'O' &&
          !(mark[i] && mark[i][j])
        ) {
          queue.push([i, j]);
        }
      }
    }
  }
  const mark = {};
  for (let i = 0; i < board[0].length; ++i) {
    if (board[0][i] === 'O' && !(mark[0] && mark[0][i])) {
      spread(board, 0, i, mark);
    }
    if (
      board[board.length - 1][i] === 'O' &&
      !(mark[board.length - 1] && mark[board.length - 1][i])
    ) {
      spread(board, board.length - 1, i, mark);
    }
  }

  for (let i = 1; i < board.length - 1; ++i) {
    if (board[i][0] === 'O' && !(mark[i] && mark[i][0])) {
      spread(board, i, 0, mark);
    }
    if (
      board[i][board[0].length - 1] === 'O' &&
      !(mark[i] && mark[i][board[0].length - 1])
    ) {
      spread(board, i, board[0].length - 1, mark);
    }
  }

  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] === 'O' && !(mark[i] && mark[i][j])) {
        board[i][j] = 'X';
      }
    }
  }
};
