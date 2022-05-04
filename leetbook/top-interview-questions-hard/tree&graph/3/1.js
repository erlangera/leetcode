/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (p === q) return p;
  const stack = [];
  let r, path; // 最近访问的节点
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const top = stack[stack.length - 1];
    if (top.right && top.right !== r) {
      root = top.right;
    } else {
      if (top === p || top === q) {
        if (path) {
          for (let i = stack.length - 1; i >= 0; --i) {
            if (path.includes(stack[i])) {
              return stack[i];
            }
          }
        } else {
          path = [...stack];
        }
      }
      stack.pop();
      r = top;
      root = null;
    }
  }
};
