/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const flag =
    (dividend >= 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
  dividend = dividend > 0 ? dividend : -dividend;
  divisor = divisor > 0 ? divisor : -divisor;
  const arr = [divisor],
    list = [1];
  while (arr[arr.length - 1] <= dividend) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 1]);
    list.push(list[list.length - 1] + list[list.length - 1]);
  }

  let res = 0;
  for (let i = arr.length - 1; i >= 0; --i) {
    if (dividend >= arr[i]) {
      res += list[i];
      dividend -= arr[i];
    }
  }
  res *= flag;

  if (res < (-2) ** 31 || res > 2 ** 31 - 1) {
    res = 2 ** 31 - 1;
  }

  return res;
};
