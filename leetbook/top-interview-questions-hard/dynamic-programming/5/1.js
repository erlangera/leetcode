/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const dp = Array(s.length).fill(0);
  for (let i = 0; i < dp.length; ++i) {
    dp[i] = [];
  }
  for (let word of wordDict) {
    if (s.startsWith(word)) {
      dp[word.length - 1].push(0);
    }
  }
  for (let i = 0; i < dp.length; ++i) {
    for (let word of wordDict) {
      if (
        i - word.length >= 0 &&
        s.slice(i - word.length + 1, i + 1) === word &&
        dp[i - word.length].length
      ) {
        dp[i].push(i - word.length + 1);
      }
    }
  }
  if (dp[dp.length - 1].length) {
    const res = [],
      stack = [s.length];
    while (stack.length) {
      const top = stack[stack.length - 1];
      if (top === 0) {
        const temp = [];
        for (let i = stack.length - 1; i > 0; --i) {
          temp.push(s.slice(stack[i], stack[i - 1]));
        }
        res.push(temp.join(' '));
        // 退栈
        let list = dp[stack[stack.length - 2] - 1];
        let index = list.indexOf(stack[stack.length - 1]);
        while (list && index === list.length - 1 && stack.length > 1) {
          stack.pop();
          list = dp[stack[stack.length - 2] - 1];
          index = list && list.indexOf(stack[stack.length - 1]);
        }
        if (stack.length > 1) {
          list = dp[stack[stack.length - 2] - 1];
          index = list.indexOf(stack[stack.length - 1]);
          stack[stack.length - 1] = list[index + 1];
        } else {
          stack.pop();
        }
      } else {
        stack.push(dp[top - 1][0]);
      }
    }
    return res;
  } else {
    return [];
  }
};
