/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const res = {
    next: null,
  };
  let temp = [...lists],
    current = res;
  temp = temp.filter((node) => node);
  while (temp.length > 1) {
    let min = temp[0].val,
      index = 0;
    for (let i = 0; i < temp.length; ++i) {
      if (temp[i].val < min) {
        min = temp[i].val;
        index = i;
      }
    }

    current.next = temp[index];
    current = current.next;
    temp[index] = temp[index].next;
    temp = temp.filter((node) => node);
  }

  return res.next;
};
