/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const list = [];
  for (let [left, right, height] of buildings) {
    list.push([left, height, 0]);
    list.push([right, height, 1]);
  }
  list.sort(([x1, h1, f1], [x2, h2, f2]) => {
    if (x1 === x2) {
      if (f1 === f2) {
        // 高的在前
        return h1 - h2;
      } else {
        // 起点在前
        return f1 - f2;
      }
    } else {
      return x1 - x2;
    }
  });

  // 按高度保存起点
  const res = [];
  const queue = [0]; // 防止空队列，同时方便结束时计算
  for (let [x, h, f] of list) {
    const maxH = queue[queue.length - 1];
    if (!f) {
      // 起点
      if (h > maxH) {
        if (res.length && res[res.length - 1][0] === x) {
          res[res.length - 1][1] = h;
        } else {
          res.push([x, h]);
        }
        queue.push(h);
      } else {
        let index = queue.length - 1;
        while (queue[index] > h) {
          --index;
        }
        queue.splice(index + 1, 0, h);
      }
    } else {
      // 终点
      if (h === maxH) {
        if (queue[queue.length - 2] !== maxH) {
          res.push([x, queue[queue.length - 2]]);
        }
        queue.pop();
      } else {
        queue.splice(queue.indexOf(h), 1);
      }
    }
  }
  return res;
};
