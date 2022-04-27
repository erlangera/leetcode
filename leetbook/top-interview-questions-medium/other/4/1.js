/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length;

  let map = {};
  for (let task of tasks) {
    if (map.hasOwnProperty(task)) {
      map[task] += 1;
    } else {
      map[task] = 1;
    }
  }
  let list = Object.values(map).sort((a, b) => b - a);
  let res = 0;
  while (list.length >= n + 1) {
    let diff = list[n] - (list[n + 1] || 0) + 1;
    diff = Math.min(diff, list[n]);

    for (let i = 0; i < n + 1; ++i) {
      list[i] -= diff;
    }
    res += diff * (n + 1);

    list = list.sort((a, b) => b - a).filter((item) => item);
  }

  if (list.length) {
    res +=
      (list[0] - 1) * (n + 1) + list.filter((item) => item === list[0]).length;
  }

  return res;
};
