/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  // 计算长度
  let current = head;
  let count = 0;
  while (current) {
    count++;
    current = current.next;
  }

  // 找到中点
  let middle = Math.ceil(count / 2);
  current = head;
  while (middle > 1) {
    current = current.next;
    middle--;
  }

  // 中点后反向
  let middleHead = null;
  let temp;
  while (current.next) {
    temp = current;
    current = temp.next;
    temp.next = middleHead;
    middleHead = temp;
  }
  current.next = middleHead;

  // 两队列比较
  while (current && head) {
    if (current.val !== head.val) {
      return false;
    } else {
      current = current.next;
      head = head.next;
    }
  }
  return true;
};
