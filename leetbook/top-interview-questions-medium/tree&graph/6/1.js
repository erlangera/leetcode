/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let res = 0;
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] === '1') {
        // BFS
        grid[i][j] = '-1';
        let list = [[i, j]];
        while (list.length) {
          const temp = [];
          for (let [x, y] of list) {
            if (x - 1 >= 0 && grid[x - 1][y] === '1') {
              grid[x - 1][y] = '-1';
              temp.push([x - 1, y]);
            }
            if (x + 1 < grid.length && grid[x + 1][y] === '1') {
              grid[x + 1][y] = '-1';
              temp.push([x + 1, y]);
            }
            if (y - 1 >= 0 && grid[x][y - 1] === '1') {
              grid[x][y - 1] = '-1';
              temp.push([x, y - 1]);
            }
            if (y + 1 < grid[0].length && grid[x][y + 1] === '1') {
              grid[x][y + 1] = '-1';
              temp.push([x, y + 1]);
            }
          }
          list = temp;
        }
        res++;
      }
    }
  }
  return res;
};
