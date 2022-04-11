/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const flag = x > 0 ? 1 : -1;
  x = x > 0 ? x : -x;

  // 字符串法
  const str = '' + x;
  res = Number(str.split('').reverse().join(''));
  res = res > 2 ** 31 - 1 || (flag === -1 && res === 2 ** 31) ? 0 : res;
  return flag * res;
};

var reverse = function (x) {
  const flag = x > 0 ? 1 : -1;
  x = x > 0 ? x : -x;

  // 模运算法
  let res = 0;
  while (x > 0) {
    res = res * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  res = res > 2 ** 31 - 1 || (flag === -1 && res === 2 ** 31) ? 0 : res;
  return flag * res;
};
