/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 * 返回n下的所有二叉搜索树
 */
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var generateTrees = function (n) {
  function recursion(start, end) {
    // 当开始范围大于结束范围证明无已法生成节点，此时直接返回null
    if (start > end) return [null];
    // 记录当前节点生成二叉搜索树的所有可能
    let nodeList = [];
    // 从[star,end]遍历选择头节点的值
    for (let i = start; i <= end; i++) {
      // 以i为头节点，那么左树选择范围为[start,i-1]
      let leftNodes = recursion(start, i - 1),
        // 以i为头节点，那么右树选择范围为[i+1,end]
        rightNodes = recursion(i + 1, end);
      // 遍历所有左右节点，构造以i为头节点的二叉搜索树，
      // 并记录到nodeList
      for (let left of leftNodes) {
        for (let right of rightNodes) {
          nodeList.push(new TreeNode(i, left, right));
        }
      }
    }
    // 返回当前范围的二叉搜索树所有组合
    return nodeList;
  }

  // 执行递归
  return recursion(1, n);
};

console.log(generateTrees(3));
