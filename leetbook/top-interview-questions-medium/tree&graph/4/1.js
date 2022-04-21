/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;

  root.left = connect(root.left);
  root.right = connect(root.right);
  // root.right.next = null;

  let left = root.left,
    right = root.right;
  while (left && right) {
    left.next = right;
    left = left.right;
    right = right.left;
  }

  return root;
};
