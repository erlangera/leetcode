/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  const convertMap = {
    2: 'abc',
    3: 'def',
    4: 'hgi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  let res = [''];
  for (let n of digits) {
    let temp = [];
    for (let c of convertMap[n]) {
      temp = temp.concat(res.map((item) => item + c));
    }
    res = temp;
  }
  return res;
};
