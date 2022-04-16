/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const convertMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let i = 0,
    res = 0;
  while (i < s.length) {
    const current = s[i];
    switch (current) {
      case 'I':
        if (s[i + 1] === 'V') {
          res += 4;
          i++;
        } else if (s[i + 1] === 'X') {
          res += 9;
          i++;
        } else {
          res += convertMap[current];
        }
        break;
      case 'X':
        if (s[i + 1] === 'L') {
          res += 40;
          i++;
        } else if (s[i + 1] === 'C') {
          res += 90;
          i++;
        } else {
          res += convertMap[current];
        }
        break;
      case 'C':
        if (s[i + 1] === 'D') {
          res += 400;
          i++;
        } else if (s[i + 1] === 'M') {
          res += 900;
          i++;
        } else {
          res += convertMap[current];
        }
        break;
      default:
        res += convertMap[current];
        break;
    }
    i++;
  }
  return res;
};
