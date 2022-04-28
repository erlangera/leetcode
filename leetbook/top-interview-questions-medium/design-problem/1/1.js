/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return '[]';

  let stack = [],
    pre = [],
    middle = [],
    count = 0;

  while (stack.length || root) {
    while (root) {
      stack.push([root, count]);
      pre.push([root.val, count++]);
      root = root.left;
    }
    const [top, temp] = stack.pop();
    middle.push([top.val, temp]);
    if (top.right) {
      root = top.right;
    }
  }
  return JSON.stringify([pre, middle]);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === '[]') return null;

  const [pre, middle] = JSON.parse(data);

  const index = middle.findIndex((item) => item[1] === pre[0][1]);
  const middleLeft = middle.slice(0, index);
  const middleRight = middle.slice(index + 1);
  const preLeft = pre.slice(1, middleLeft.length + 1);
  const preRight = pre.slice(middleLeft.length + 1);

  return {
    val: pre[0][0],
    left: preLeft.length
      ? deserialize(JSON.stringify([preLeft, middleLeft]))
      : null,
    right: preRight.length
      ? deserialize(JSON.stringify([preRight, middleRight]))
      : null,
  };
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
