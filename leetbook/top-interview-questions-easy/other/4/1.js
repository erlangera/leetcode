/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const res = [];
  for (let i = 0; i < numRows; ++i) {
    const temp = [];
    for (let j = 0; j <= i; ++j) {
      if (j === 0 || j === i) {
        temp.push(1);
      } else {
        temp.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
    res.push(temp);
  }
  return res;
};
