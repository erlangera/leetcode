const map = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};
var Trie = function () {
  this.root = {
    value: '',
    isWord: false,
    children: Array(26).fill(null),
  };
};
/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; ++i) {
    const index = map[word[i]];
    if (current.children[index]) {
      if (i === word.length - 1) {
        current.children[index].isWord = true;
      }
    } else {
      current.children[index] = {
        value: word[i],
        isWord: i === word.length - 1,
        children: Array(26).fill(null),
      };
    }
    current = current.children[index];
  }
};
/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; ++i) {
    const index = map[word[i]];
    if (!current || !current.children[index]) {
      return false;
    }
    if (
      i === word.length - 1 &&
      current.children[index] &&
      current.children[index].isWord
    ) {
      return true;
    }
    current = current.children[index];
  }
  return false;
};
/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let current = this.root;
  for (let i = 0; i < prefix.length; ++i) {
    const index = map[prefix[i]];
    if (!current || !current.children[index]) {
      return false;
    }
    if (i === prefix.length - 1 && current.children[index]) {
      return true;
    }
    current = current.children[index];
  }
  return false;
};
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
