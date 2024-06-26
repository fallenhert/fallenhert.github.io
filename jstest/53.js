/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxValue = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
    } else {
      nums[i] = Math.max(nums[i - 1] + nums[i], nums[i]);
    }
    if (nums[i] > maxValue) {
      maxValue = nums[i];
    }
  }

  return maxValue;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
