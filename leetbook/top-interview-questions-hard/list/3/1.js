/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  const res = {
    val: head.val,
    next: head.next,
    random: null,
  };
  let current = res;
  while (current.next) {
    current.next = {
      val: current.next.val,
      next: current.next.next,
      random: null,
    };
    current = current.next;
  }
  for (let old = head, val = res; old; old = old.next, val = val.next) {
    if (old.random) {
      for (
        let tempOld = head, tempVal = res;
        ;
        tempOld = tempOld.next, tempVal = tempVal.next
      ) {
        if (tempOld === old.random) {
          val.random = tempVal;
          break;
        }
      }
    }
  }
  return res;
};
