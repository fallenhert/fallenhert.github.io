/**
 * @param {number[]} nums
 * @return {number}
 * 在原数组上删除展示超过2次的数
 */
var removeDuplicates = function (nums) {
  if (nums.length == 0) {
    return 0;
  }

  let index = 0;
  let counter = 0;
  let tempNum = null;
  let tempNumCount = 0;

  while (index < nums.length) {
    if (!tempNum && tempNum !== 0) {
      tempNum = nums[index];
      tempNumCount = 1;
      index++;
      counter++;
    } else {
      if (nums[index] == tempNum) {
        tempNumCount++;
        if (tempNumCount <= 2) {
          nums[counter] = nums[index];
          index++;
          counter++;
        } else {
          index++;
        }
      } else {
        tempNum = nums[index];
        tempNumCount = 1;
        nums[counter] = nums[index];
        index++;
        counter++;
      }
    }
  }

  return counter;
};

console.log(removeDuplicates([0, 0, 0, 0, 0]));
