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
var maxDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return 1 + Math.max(left, right);
};

var maxDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  // BFS
  let depth = 0;
  let current = [root];
  while (current.length) {
    const temp = [];
    for (let i = 0; i < current.length; ++i) {
      if (current[i].left) {
        temp.push(current[i].left);
      }
      if (current[i].right) {
        temp.push(current[i].right);
      }
    }
    current = temp;
    depth++;
  }
  return depth;
};

var maxDepth = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  // DFS
  let depth = 0;
  let stack = [root];
  let level = [1];
  while (stack.length) {
    const top = stack.pop();
    const topLevel = level.pop();
    depth = Math.max(depth, topLevel);
    if (top.left) {
      stack.push(top.left);
      level.push(topLevel + 1);
    }
    if (top.right) {
      stack.push(top.right);
      level.push(topLevel + 1);
    }
  }
  return depth;
};
