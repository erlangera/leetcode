/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  let stack = [root];
  const res = [];
  while (stack.length) {
    res.push(stack.map((node) => node.val));

    stack = stack.reduce((res, node) => {
      node.left && res.push(node.left);
      node.right && res.push(node.right);
      return res;
    }, new Array());
  }
  return res;
};
