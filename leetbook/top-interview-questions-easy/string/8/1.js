/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  function summary(str) {
    let current = str[0];
    let count = 1,
      i = 1,
      res = '';
    while (i < str.length) {
      const temp = str[i];
      if (temp === current) {
        count++;
      } else {
        res = res + (count * 10 + Number(current));
        current = temp;
        count = 1;
      }
      i++;
    }
    res = res + (count * 10 + Number(current));
    return res;
  }

  if (n === 1) return '1';

  let res = '1';
  for (let i = 1; i < n; ++i) {
    res = summary(res);
  }
  return res;
};
