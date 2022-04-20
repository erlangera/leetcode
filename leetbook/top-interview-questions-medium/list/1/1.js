/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let res = null,
    current,
    carry = 0;
  while (l1 && l2) {
    const temp = l1.val + l2.val + carry;
    const val = temp % 10;
    carry = Math.floor(temp / 10);
    const node = {
      val: val,
      next: null,
    };
    if (!res) {
      res = node;
    } else {
      current.next = node;
    }
    current = node;
    l1 = l1.next;
    l2 = l2.next;
  }
  current.next = l1 || l2;

  // 处理进位
  while (carry) {
    if (current.next) {
      const temp = current.next.val + carry;
      current.next.val = temp % 10;
      carry = Math.floor(temp / 10);
      current = current.next;
    } else {
      current.next = {
        val: carry,
        next: null,
      };
      carry = 0;
    }
  }
  return res;
};
