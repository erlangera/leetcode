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

var isMatch = function (s, p) {
  p = p.replace(/\*+/g, '*');
  if (p === '') return s === '';
  if (s === '') return p === '' || p === '*';

  const dp = Array.from(Array(p.length), () => Array(s.length).fill(false));
  for (let i = 0; i < p.length; ++i) {
    for (let j = 0; j < s.length; ++j) {
      switch (p[i]) {
        case '?':
          if (i === 0) {
            dp[i][j] = j === 0;
          } else if (j === 0) {
            dp[i][j] = p.slice(0, i) === '*';
          } else {
            dp[i][j] = dp[i - 1][j - 1];
          }
          break;
        case '*':
          dp[i][j] =
            i == 0
              ? true
              : dp[i - 1][j] || (j > 0 && (dp[i][j - 1] || dp[i - 1][j - 1]));
          break;
        default:
          if (p[i] === s[j]) {
            if (i === 0) {
              dp[i][j] = j === 0;
            } else if (j === 0) {
              dp[i][j] = p.slice(0, i) === '*';
            } else {
              dp[i][j] = dp[i - 1][j - 1];
            }
          } else {
            dp[i][j] = false;
          }
          break;
      }
    }
  }
  return dp[p.length - 1][s.length - 1];
};
