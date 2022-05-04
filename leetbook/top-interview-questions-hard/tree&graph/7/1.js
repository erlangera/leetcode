/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  function search(map, i, reach, path) {
    if (!map[i]) {
      reach[i] = true;
      res.push(i);
      return true;
    }
    path.push(i);
    for (let pre of map[i]) {
      if (!reach[pre] && (path.includes(pre) || !search(map, pre, reach, path)))
        return false;
    }

    reach[i] = true;
    res.push(i);
    path.pop();
    return true;
  }
  const map = {};
  for (let [current, pre] of prerequisites) {
    if (map[current]) {
      map[current].push(pre);
    } else {
      map[current] = [pre];
    }
  }
  const reach = Array(numCourses).fill(false);
  const res = [];
  for (let i = 0; i < numCourses; ++i) {
    if (!reach[i] && !search(map, i, reach, [])) return [];
  }

  return res;
};
