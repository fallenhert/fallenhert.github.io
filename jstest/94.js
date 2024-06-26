/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 二叉树中序遍历
 */

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var inorderTraversal = function (root) {
  const result = [];

  var midOrder = function (node) {
    if (!node) {
      return;
    }
    if (node.left) {
      midOrder(node.left);
    }
    result.push(node.val);
    if (node.right) {
      midOrder(node.right);
    }
  };

  midOrder(root);
  return result;
};

const node5 = new TreeNode(5);
const node4 = new TreeNode(4);
const node3 = new TreeNode(3, node4, node5);
const node2 = new TreeNode(2);
const node1 = new TreeNode(1, node2, node3);

inorderTraversal(node1);
