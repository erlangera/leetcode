/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = Array(s.length).fill(false);
  for (let word of wordDict) {
    if (s.startsWith(word)) {
      dp[word.length - 1] = true;
    }
  }
  for (let i = 0; i < dp.length; ++i) {
    for (let word of wordDict) {
      if (
        i - word.length >= 0 &&
        s.slice(i - word.length + 1, i + 1) === word &&
        dp[i - word.length]
      ) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[dp.length - 1];
};
