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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root || (!root.left && !root.right)) return true;

  // 递归法
  const { left, right } = root;
  if (!left || !right || left.val !== right.val) return false;

  // 转接
  const temp = left.right;
  left.right = right.right;
  right.right = temp;

  return isSymmetric(left) && isSymmetric(right);
};

var isSymmetric = function (root) {
  if (!root || (!root.left && !root.right)) return true;

  // 迭代法 BFS
  const leftStack = [root.left],
    rightStack = [root.right];
  while (leftStack.length && rightStack.length) {
    const left = leftStack.pop();
    const right = rightStack.pop();
    if (!left && !right) continue;
    if (!left || !right || left.val !== right.val) return false;

    leftStack.push(left.left);
    leftStack.push(left.right);
    rightStack.push(right.right);
    rightStack.push(right.left);
  }
  return true;
};
