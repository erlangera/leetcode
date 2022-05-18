/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  function add(x, y) {
    return [x & y, x ^ y];
  }

  // a短
  if (b.length > a.length) {
    const temp = a;
    a = b;
    b = temp;
  }

  const listA = a
    .toString(2)
    .split('')
    .map((item) => Number(item))
    .reverse();
  const listB = b
    .toString(2)
    .split('')
    .map((item) => Number(item))
    .reverse();

  let carry = 0;
  const res = [];
  listA.forEach((item) => {
    const [high1, low1] = add(item, listB[0]);
    const [high2, low2] = add(low1, carry);
    const [, low] = add(high1, high2);
    res.push(low2);
    carry = low;
    listB.shift();
  });

  for (let item of listB) {
    const [high, low] = add(item, carry);
    carry = high;
    res.push(low);
  }

  if (carry) {
    res.push(carry);
  }
  return parseInt(res.reverse().join(''), 2);
};

var getSum = function (a, b) {
  if (a === 0) return b;

  return getSum((a & b) << 1, a ^ b);
};
