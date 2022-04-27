/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (let item of tokens) {
    switch (item) {
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        const a = stack.pop();
        stack.push(stack.pop() - a);
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        const c = stack.pop();
        const b = stack.pop() / c;
        stack.push(b < 0 ? Math.ceil(b) : Math.floor(b));
        break;
      default:
        stack.push(Number(item));
        break;
    }
  }
  return stack[0];
};
