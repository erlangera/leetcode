/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replace(/\s/g, '');
  const nums = s.split(/[\+\*\/-]/).map((item) => Number(item));
  const operator = s.split(/\d+/).filter((item) => item);
  const stackNums = [nums[0]],
    stackOp = [];
  let index = 0;
  while (index < operator.length) {
    switch (operator[index]) {
      case '*':
        stackNums.push(stackNums.pop() * nums[index + 1]);
        break;
      case '/':
        const temp = stackNums.pop() / nums[index + 1];
        stackNums.push(temp < 0 ? Math.ceil(temp) : Math.floor(temp));
        break;
      default:
        stackNums.push(nums[index + 1]);
        stackOp.push(operator[index]);
    }
    index++;
  }
  index = 0;
  let res = stackNums[0];
  while (index < stackOp.length) {
    switch (stackOp[index]) {
      case '+':
        res += stackNums[index + 1];
        break;
      case '-':
        res -= stackNums[index + 1];
        break;
    }
    index++;
  }
  return res;
};
