/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;
  if (nums.length === 1) return { val: nums[0], left: null, right: null };

  const middle = Math.floor(nums.length / 2);
  return {
    val: nums[middle],
    left: sortedArrayToBST(nums.slice(0, middle)),
    right: sortedArrayToBST(nums.slice(middle + 1, nums.length)),
  };
};
