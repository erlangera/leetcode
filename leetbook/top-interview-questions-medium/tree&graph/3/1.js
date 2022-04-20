/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null;
  if (preorder.length === 1)
    return { val: preorder[0], left: null, right: null };

  const root = preorder[0];
  const index = inorder.indexOf(root);
  const inorderLeft = inorder.slice(0, index);
  const inorderRight = inorder.slice(index + 1);
  const preorderLeft = preorder.slice(1, inorderLeft.length + 1);
  const preorderRight = preorder.slice(inorderLeft.length + 1);
  return {
    val: root,
    left: buildTree(preorderLeft, inorderLeft),
    right: buildTree(preorderRight, inorderRight),
  };
};

var buildTree = function (preorder, inorder) {
  // 迭代法
  // TODO
};
