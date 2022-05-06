/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  function reduce(a, b) {
    let x = Math.abs(a),
      y = Math.abs(b);
    if (x < y) {
      const temp = x;
      x = y;
      y = x;
    }
    while (x % y) {
      const temp = x % y;
      x = y;
      y = temp;
    }
    if (a < 0) {
      a = -a;
      b = -b;
    }
    return y !== 0 ? [a / y, b / y] : [1, 0];
  }
  let res = 1;
  for (let i = 0; i < points.length; ++i) {
    const [x, y] = points[i];
    const map = {};
    for (let j = 0; j < points.length; ++j) {
      if (i === j) continue;

      const [x1, y1] = points[j];
      const hash = reduce(x1 - x, y1 - y).join(',');
      map[hash] = hash in map ? map[hash] + 1 : 2;
      if (res < map[hash]) {
        res = map[hash];
      }
    }
  }
  return res;
};
