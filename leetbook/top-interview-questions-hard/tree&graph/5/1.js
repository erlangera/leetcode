/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const mark = Array(isConnected.length).fill(false);
  let res = 0;
  for (let i = 0; i < isConnected.length; ++i) {
    if (mark[i]) continue;

    mark[i] = true;
    ++res;
    const stack = [i];
    while (stack.length) {
      const top = stack.pop();
      for (let j = 0; j < isConnected.length; ++j) {
        if (top === j) continue;

        if (isConnected[top][j] && !mark[j]) {
          mark[j] = true;
          stack.push(j);
        }
      }
    }
  }
  return res;
};
