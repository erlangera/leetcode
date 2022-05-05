/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const map = {};
  for (let num of nums) {
    if (!(num in map)) {
      map[num] = num - 1 in map ? map[num - 1] : num;
      let index = num + 1;
      while (index in map) {
        map[index] = map[num];
        ++index;
      }
    }
  }

  return Math.max(
    ...Object.entries(map).map(([key, val]) => Number(key) - val + 1)
  );
};
