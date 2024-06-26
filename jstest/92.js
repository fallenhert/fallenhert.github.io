/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

var reverseBetween = function (head, left, right) {
  let preCursor = new ListNode(-1, head);
  let afterCursor = head.next;
  let leftSide = head;
  let rightSide = head;
  // 定位
  for (let i = 1; i < left; i++) {
    preCursor = preCursor.next;
    leftSide = leftSide.next;
  }
  for (let i = 1; i < right; i++) {
    rightSide = rightSide.next;
    afterCursor = afterCursor.next;
  }
  console.log(leftSide, preCursor);
  console.log(rightSide, afterCursor);

  let fixedleft = leftSide;
  for (let i = 0; i < right - left; i++) {
    temp = leftSide.next;
    leftSide.next = temp.next;
    temp.next = fixedleft;

    fixedleft = temp;
  }

  preCursor.next = fixedleft;
  leftSide.next = afterCursor;

  if (left == 1) {
    return preCursor.next;
  }
  return head;
};

var showResultList = function (head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
};

// const node5 = new ListNode(5);
// const node4 = new ListNode(4, node5);
// const node3 = new ListNode(3, node4);
const node2 = new ListNode(2);
const node1 = new ListNode(1, node2);

console.log(showResultList(reverseBetween(node1, 1, 2)));
