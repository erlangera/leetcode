/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let i = 0;
  // 空格
  while (i < s.length && s[i] === ' ') {
    i++;
  }
  // 符号
  let flag = 1;
  if (s[i] === '-') {
    flag = -1;
    i++;
  } else if (s[i] === '+') {
    flag = 1;
    i++;
  }
  // 数字
  let res = 0;
  while (i < s.length && '0123456789'.includes(s[i])) {
    res = res * 10 + Number(s[i]);
    i++;
  }
  res = flag * res;
  // 范围
  if (flag === -1) {
    res = res >= (-2) ** 31 ? res : (-2) ** 31;
  } else {
    res = res <= 2 ** 31 - 1 ? res : 2 ** 31 - 1;
  }

  return res;
};
