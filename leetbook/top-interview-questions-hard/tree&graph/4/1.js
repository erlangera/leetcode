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
 * @return {number}
 */
var maxPathSum = function (root) {
  let res = -10000;
  function maxSubPath(root) {
    if (!root.left && !root.right) {
      res = Math.max(res, root.val);
      return root.val;
    }
    const left = root.left && maxSubPath(root.left);
    const right = root.right && maxSubPath(root.right);
    const list = [left, right].filter((item) => item !== null);
    const max = Math.max(0, ...list) + root.val;
    res = Math.max(
      res,
      ...list,
      root.val,
      max,
      list.reduce((r, item) => r + item) + root.val
    );
    return max;
  }

  maxSubPath(root);
  return res;
};
