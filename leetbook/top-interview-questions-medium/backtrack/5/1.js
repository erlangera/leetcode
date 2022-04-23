/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (
        board[i][j] === word[0] &&
        (word.length === 1 || search(board, word, i, j))
      ) {
        return true;
      }
    }
  }
  return false;
};

function search(board, word, i, j) {
  // [x, y, 尝试次数]
  const stack = [[i, j, 0]];
  while (stack.length) {
    const top = stack[stack.length - 1];
    let [xNext, yNext, count] = top;
    // 计算下个备选
    switch (count) {
      case 0: // 上
        xNext--;
        if (xNext < 0) {
          top[2] += 1;
          continue;
        }
        break;
      case 1: // 左
        yNext--;
        if (yNext < 0) {
          top[2] += 1;
          continue;
        }
        break;
      case 2: // 下
        xNext++;
        if (xNext >= board.length) {
          top[2] += 1;
          continue;
        }
        break;
      case 3: // 右
        yNext++;
        if (yNext >= board[0].length) {
          stack.pop();
          continue;
        }
        break;
      case 4: // 上级回退
      default:
        stack.pop();
        continue;
    }
    if (
      stack.some(([x, y]) => xNext === x && yNext === y) ||
      board[xNext][yNext] !== word[stack.length]
    ) {
      if (count === 3) {
        stack.pop();
      } else {
        top[2] += 1;
      }
    } else {
      if (stack.length === word.length - 1) {
        return true;
      } else {
        top[2] += 1;
        stack.push([xNext, yNext, 0]);
      }
    }
  }
  return false;
}

// 剪枝优化 TODO
