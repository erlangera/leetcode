/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  function match(a, b) {
    return (
      (a === '(' && b === ')') ||
      (a === '[' && b === ']') ||
      (a === '{' && b === '}')
    );
  }

  if (!s.length) return true;

  const stack = [];
  let i = 0;
  while (stack.length || i < s.length) {
    if (!stack.length) {
      stack.push(s[i]);
      i++;
    }
    if (i == s.length && stack.length) return false;

    if (match(stack[stack.length - 1], s[i])) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
    i++;
  }
  return true;
};
