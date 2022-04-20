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
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const res = [];
  let current = [root];
  let count = 0;
  while (current.length) {
    const temp = current.map((item) => item.val);
    if (count % 2) {
      temp.reverse();
    }
    res.push(temp);

    current = current.reduce((res, item) => {
      item.left && res.push(item.left);
      item.right && res.push(item.right);
      return res;
    }, new Array());
    count++;
  }

  return res;
};
