/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const temp = {};
  for (let str of strs) {
    const hash = str.split('').sort().join('');
    if (hash in temp) {
      temp[hash].push(str);
    } else {
      temp[hash] = [str];
    }
  }
  return Object.values(temp);
};
