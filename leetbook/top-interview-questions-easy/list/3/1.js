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
var reverseList = function (head) {
  if (!head) return head;

  let current = head;
  head = null;
  let temp;
  while (current.next) {
    temp = current;
    current = temp.next;
    temp.next = head;
    head = temp;
  }
  current.next = head;
  return current;
};

var reverseList = function (head) {
  if (!head || !head.next) return head;

  const temp = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return temp;
};
