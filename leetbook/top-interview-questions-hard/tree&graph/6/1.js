/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  function search(map, i, reach, path) {
    if (!map[i]) {
      reach[i] = true;
      return true;
    }
    for (let pre of map[i]) {
      if (
        !reach[pre] &&
        (path.includes(pre) || !search(map, pre, reach, [...path, i]))
      )
        return false;
    }

    reach[i] = true;
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
  for (let i = 0; i < numCourses; ++i) {
    if (!reach[i] && !search(map, i, reach, [])) return false;
  }

  return true;
};
