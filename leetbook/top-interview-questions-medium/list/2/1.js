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
var oddEvenList = function (head) {
  let count = 1,
    oddHead = null,
    odd = null,
    evenHead = null,
    even = null;
  while (head) {
    if (count % 2) {
      if (oddHead) {
        odd.next = head;
      } else {
        oddHead = head;
      }
      odd = head;
    } else {
      if (evenHead) {
        even.next = head;
      } else {
        evenHead = head;
      }
      even = head;
    }

    count++;
    head = head.next;
  }

  odd && (odd.next = evenHead);
  even && (even.next = null);
  return oddHead;
};
