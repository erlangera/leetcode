/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  function diffLength(a, b) {
    let res = 0,
      length = Math.max(a.length, b.length);
    for (let i = 0; i < length; ++i) {
      if (a[i] !== b[i]) {
        ++res;
      }
    }
    return res;
  }

  let map = {
      [beginWord]: 1,
    },
    current = [beginWord];
  while (current.length) {
    const temp = [];
    for (let item of current) {
      if (item === endWord) {
        return map[item];
      }
      for (let word of wordList) {
        if (diffLength(item, word) === 1) {
          temp.push(word);
          map[word] = map[item] + 1;
        }
      }
      wordList = wordList.filter((word) => !map[word]);
    }
    current = temp;
  }
  return 0;
};
