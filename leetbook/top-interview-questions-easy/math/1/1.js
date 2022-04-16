/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const res = [];
  for (let i = 1; i < n + 1; ++i) {
    let temp = '';
    if (i % 3 === 0) {
      temp += 'Fizz';
    }
    if (i % 5 === 0) {
      temp += 'Buzz';
    }
    if (!temp) {
      temp = i.toString();
    }
    res.push(temp);
  }

  return res;
};
