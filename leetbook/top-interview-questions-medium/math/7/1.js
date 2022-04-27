/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  if (numerator === 0) return '0';
  let sign = '-';
  if (
    (numerator >= 0 && denominator > 0) ||
    (numerator < 0 && denominator < 0)
  ) {
    sign = '';
  }
  numerator = numerator < 0 ? -numerator : numerator;
  denominator = denominator < 0 ? -denominator : denominator;
  if (numerator % denominator === 0) {
    return sign + (numerator / denominator).toString();
  }
  let intPart = Math.floor(numerator / denominator);
  let floatPart = numerator % denominator;
  // 找最大公约化简
  let a = denominator,
    b = floatPart;
  while (a % b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  floatPart /= b;
  denominator /= b;
  const history = [];
  const res = [];
  while (floatPart && !history.includes(floatPart)) {
    history.push(floatPart);
    floatPart *= 10;
    while (floatPart < denominator) {
      history.push(floatPart);
      floatPart *= 10;
      res.push(0);
    }
    res.push(Math.floor(floatPart / denominator));
    floatPart = floatPart % denominator;
  }
  if (floatPart) {
    const index = history.indexOf(floatPart);
    res.splice(index, 0, '(');
    return sign + intPart + '.' + res.join('') + ')';
  } else {
    return sign + intPart + '.' + res.join('');
  }
};
