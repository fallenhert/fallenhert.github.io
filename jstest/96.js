/**
 * @param {number} n
 * @return {number}
 * 二叉搜索树的个数
 */
var numTreesv2 = function (n) {
  const list = new Array(n + 1).fill(0);
  list[0] = 1;
  list[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      list[i] = list[i] + list[i - j - 1] * list[j];
    }
  }

  return list;
};

/**
 * @param {number} n
 * @return {number}
 * 回溯-超时
 * 无用计算量过多
 */
var numTrees = function (n) {
  var countTree = function (start, end) {
    if (start == end - 1 || start == end) {
      return 1;
    }

    let count = 0;
    for (let i = start; i < end; i++) {
      let leftCount = countTree(start, i);
      let rightCount = countTree(i + 1, end);
      count = count + leftCount * rightCount;
    }
    return count;
  };

  return countTree(0, n);
};

console.log(numTrees(3));
