/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) return null;

  let fast = head,
    slow = head,
    count = 0;
  while (fast) {
    fast = fast.next && fast.next.next;
    if (!fast) {
      temp = slow;
      slow = slow.next;
      temp.next = null;
    } else {
      slow = slow.next;
    }
    count++;
  }
  if (count === 1) {
    if (slow && head.val > slow.val) {
      slow.next = head;
      head = slow;
    } else if (slow) {
      head.next = slow;
    }
    return head;
  }

  let left = sortList(head);
  let right = sortList(slow);
  const res = {
    next: null,
  };
  let current = res;
  while (left && right) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }
  current.next = left || right;

  return res.next;
};
