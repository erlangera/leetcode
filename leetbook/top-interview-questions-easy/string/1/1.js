/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let temp, index;
  const middle = s.length / 2;
  for (let i = 0; i < middle; ++i) {
    index = s.length - i - 1;
    temp = s[i];
    s[i] = s[index];
    s[index] = temp;
  }
};
