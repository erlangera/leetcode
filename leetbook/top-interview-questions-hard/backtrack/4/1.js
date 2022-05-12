/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // 性能问题
  p = p.replace(/\*+/g, '*');
  const stack = [[0, 0, 0]];
  while (stack.length) {
    // 匹配字段不包括sEnd
    const [sStart, sEnd, pIndex] = stack[stack.length - 1];
    if (sStart === s.length && pIndex === p.length) {
      return true;
    }
    let flag = false;
    switch (p[pIndex]) {
      case '?':
        if (sStart === sEnd) {
          ++stack[stack.length - 1][1];
        } else if (sStart < s.length) {
          stack.push([sStart + 1, sStart + 1, pIndex + 1]);
        } else {
          // 退栈到*
          flag = true;
        }
        break;
      case '*':
        if (sEnd < s.length) {
          stack.push([sEnd, sEnd, pIndex + 1]);
        } else if (sEnd === s.length) {
          if (pIndex === p.length - 1) {
            return true;
          } else {
            stack.push([sEnd, sEnd, pIndex + 1]);
          }
        } else {
          // 退栈到*
          stack.pop();
          flag = true;
        }
        break;
      default:
        if (sStart === sEnd) {
          ++stack[stack.length - 1][1];
        } else if (s[sStart] === p[pIndex]) {
          stack.push([sStart + 1, sStart + 1, pIndex + 1]);
        } else {
          // 退栈到*
          flag = true;
        }
        break;
    }
    if (flag) {
      // 退栈到*
      while (stack.length && p[stack[stack.length - 1][2]] !== '*') {
        stack.pop();
      }
      if (stack.length) {
        ++stack[stack.length - 1][1];
      } else {
        return false;
      }
    }
  }
  return false;
};
