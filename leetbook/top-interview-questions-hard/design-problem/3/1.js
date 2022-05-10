/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.stack = [nestedList];
  this.index = 0;
  let root = nestedList[0];
  while (!root.isInteger()) {
    const list = root.getList();
    if (!list.length) {
      this.next();
      return;
    } else {
      this.stack.push(list);
      this.index = 0;
      root = list[0];
    }
  }
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.index < this.stack[this.stack.length - 1].length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  let top = this.stack[this.stack.length - 1];
  const res = top[this.index];
  if (this.index < top.length - 1 || this.stack.length === 1) {
    ++this.index;
  } else {
    // 退栈
    let parent = this.stack[this.stack.length - 2];
    let index = parent.findIndex((item) => item.getList() === top);
    this.stack.pop();
    while (index === parent.length - 1 && this.stack.length > 1) {
      top = this.stack[this.stack.length - 1];
      parent = this.stack[this.stack.length - 2];
      index = parent.findIndex((item) => item.getList() === top);
      this.stack.pop();
    }
    this.index = index + 1;
  }
  let root = this.stack[this.stack.length - 1][this.index];
  while (root && !root.isInteger()) {
    const list = root.getList();
    if (!list.length) {
      while (
        this.index === this.stack[this.stack.length - 1].length - 1 &&
        this.stack.length > 1
      ) {
        const top = this.stack[this.stack.length - 1];
        this.index = this.stack[this.stack.length - 2].findIndex(
          (item) => item.getList() === top
        );
        this.stack.pop();
      }
      this.index++;
      root = this.stack[this.stack.length - 1][this.index];
    } else {
      this.stack.push(list);
      this.index = 0;
      root = list[0];
    }
  }
  return res.getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
