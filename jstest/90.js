/**
 * @param {number[]} nums
 * @return {number[][]}
 * 包含重复元素，返回子集
 */
var subsetsWithDup = function (nums) {
  const res = [];
  const path = [];

  nums.sort();

  var backTrace = function (index) {
    res.push([...path]);

    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      backTrace(i + 1);
      path.pop();
      while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
        i++;
      }
    }
  };

  backTrace(0);
  console.log(res);
  return res;
};

subsetsWithDup([1, 2, 2]);
