/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
function findWords(board, words) {
  // 性能问题
  function search(board, i, j) {
    let filter = words.filter((item) => item.startsWith(board[i][j])),
      stack = [[i, j, 0]];
    while (stack.length) {
      let temp = stack.map(([x, y]) => board[x][y]).join(''),
        [x, y, index] = stack[stack.length - 1],
        filterTemp = filter.filter((item) => item.startsWith(temp));
      if (index === 0) {
        if (temp in dict) {
          set.add(temp);
        }
      }
      x += offsets[index][0];
      y += offsets[index][1];
      if (
        x >= 0 &&
        x < board.length &&
        y >= 0 &&
        y < board[0].length &&
        stack.every(([x1, y1]) => x1 !== x || y1 !== y)
      ) {
        if (filterTemp.some((item) => item[temp.length] === board[x][y]))) {
          stack.push([x, y, 0]);
          continue;
        }
      }
      while (stack.length && stack[stack.length - 1][2] === 3) {
        stack.pop();
      }
      if (stack.length) {
        ++stack[stack.length - 1][2];
      }
    }
  }
  const offsets = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  const dict = {};
  for (let word of words) {
    dict[word] = true;
  }
  const set = new Set();
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      search(board, i, j);
    }
  }
  let res = [];
  for (let word of set) {
    res.push(word);
  }
  return res;
}


function findWords(board, words) {
  // 性能仍有问题但由于前者
  const res = [];
  for (let word of words) {
    if (exist(board, word)) {
      res.push(word);
    }
  }
  return res;
}

function exist(board, word) {
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
  const offsets = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  const stack = [[i, j, 0]];
  while (stack.length) {
    let [x, y, index] = stack[stack.length - 1];
    if (index === 0 && stack.length === word.length) {
      return true;
    }
    x += offsets[index][0];
    y += offsets[index][1];
    if (
      x >= 0 &&
      x < board.length &&
      y >= 0 &&
      y < board[0].length &&
      stack.every(([x1, y1]) => x1 !== x || y1 !== y)
    ) {
      if (word[stack.length] === board[x][y]) {
        stack.push([x, y, 0]);
        continue;
      }
    }
    while (stack.length && stack[stack.length - 1][2] === 3) {
      stack.pop();
    }
    if (stack.length) {
      ++stack[stack.length - 1][2];
    }
  }
  return false;
}

