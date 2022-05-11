/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  function isPalindrome(s, i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      ++i;
      --j;
    }
    return true;
  }
  const stack = [['', 0, 0]],
    res = [];
  while (stack.length) {
    const [, i, end] = stack.pop();
    let flag = true;
    for (let j = end; j < s.length; ++j) {
      if (isPalindrome(s, i, j)) {
        stack.push([s.slice(i, j + 1), i, j]);
        if (j === s.length - 1) {
          res.push(stack.map(([str]) => str));
          stack.pop();
        } else {
          stack.push(['', j + 1, j + 1]);
          flag = false; // 不需要退栈
        }
        break;
      }
    }
    if (flag && stack.length) {
      const [, i, end] = stack.pop();
      stack.push(['', i, end + 1]);
    }
  }
  return res;
};
