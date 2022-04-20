/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 统计长度
  let currentA = headA,
    currentB = headB,
    lengthA = 0,
    lengthB = 0;
  while (currentA) {
    currentA = currentA.next;
    lengthA++;
  }
  while (currentB) {
    currentB = currentB.next;
    lengthB++;
  }

  // 对齐指针
  currentA = headA;
  currentB = headB;
  let diff = lengthA - lengthB;
  if (diff > 0) {
    while (diff) {
      currentA = currentA.next;
      diff--;
    }
  } else if (diff < 0) {
    while (diff) {
      currentB = currentB.next;
      diff++;
    }
  }

  while (currentA && currentB) {
    if (currentA === currentB) {
      return currentA;
    } else {
      currentA = currentA.next;
      currentB = currentB.next;
    }
  }
  return null;
};
