/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort(([h1, k1], [h2, k2]) => {
    if (h1 === h2) {
      return k1 - k2;
    } else {
      return h2 - h1;
    }
  });
  for (let i = 1; i < people.length; ++i) {
    if (people[i][1] !== i) {
      // 前移
      let index = i;
      const current = people[i];
      while (index > current[1]) {
        people[index] = people[index - 1];
        --index;
      }
      people[index] = current;
    }
  }
  return people;
};
