---
title: 双指针问题解析
date: 2023/08/03
tags: [leetcode, JavaScript]
categories: 练习
recommend: false
locate: 南通
copyright: 原创
mathjax: true
cover: /img/pageimage/0005.png
---

刚开始刷题，遇到的首个思路是双指针。在这篇中积累总结一下。

## [5. 最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)

给你一个字符串 s，找到 s 中最长的回文子串。如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

**示例 1**

```
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```

**示例 2**

```
输入：s = "cbbd"
输出："bb"
```

**解析思路**

中心扩散法

1. 定义 i 位置为初始位，注意到从初始位往后复数位如果均相同，则为回文字符串，如”aa“，”bbb“，记为[ i , j ]
2. 在 1 的基础上，建立两个指针，start 指向字符串初始位 i，end 指向字符串结束位 j
3. 由中心向外扩散，如果 start-1 位 与 end+1 位 相同，[ start - 1, end + 1] 也为回文字符串
4. 重复 3 步骤，直到获得 i 初始位下的最长回文字符串
5. i 递增，重复 1-4 步骤，直到获取到最长回文字符串

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let str = "";
  for (let i = 0, start = 0, end = 0; i < s.length; i++) {
    start = i;
    end = i;
    while (end + 1 < s.length && s[end + 1] == s[i]) {
      end += 1;
    }
    while (start > 0 && end < s.length && s[end + 1] == s[start - 1]) {
      end += 1;
      start -= 1;
    }
    if (end > start && str.length < end - start + 1) {
      str = s.slice(start, end + 1);
    }
  }
  return str ? str : s[0];
};
```

## [11. 盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/)

给定一个长度为 `n` 的整数数组 `height` 。有 `n` 条垂线，第 `i` 条线的两个端点是 `(i, 0)` 和 `(i, height[i])` 。

找出其中的两条线，使得它们与 `x` 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

**说明：**你不能倾斜容器。

**示例 1：**

```
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```

**示例 2：**

```
输入：s = "cbbd"
输出："bb"
```

**解析思路**

向中心夹逼

1. 建立两个指针，left 指向最左位，right 指向最右侧，每次计算 left 与 right 之间 可盛水的量
2. 比较左右两条边的大小，小的一边往内侧移动，计算 可盛水的量
3. 直到左右侧重合前，获取最大可盛水的量即为题解

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0; // 最大容积
  while (left < right) {
    // 计算出 当前的容积  与最大容积比较，取出最大的
    const currentArea = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, currentArea);
    //  left 向内移动
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
```

## [18. 四数之和](https://leetcode.cn/problems/4sum/)

给你一个由 `n` 个整数组成的数组 `nums` ，和一个目标值 `target` 。请你找出并返回满足下述全部条件且**不重复**的四元组 `[nums[a], nums[b], nums[c], nums[d]]` （若两个四元组元素一一对应，则认为两个四元组重复）：

- `0 <= a, b, c, d < n`
- `a`、`b`、`c` 和 `d` **互不相同**
- `nums[a] + nums[b] + nums[c] + nums[d] == target`

你可以按 **任意顺序** 返回答案 。

**示例 1：**

```
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```

**示例 2：**

```
输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
```

**解析思路**

基于三数相加的思路。

1. 将数组从低到高依次排列
2. 通过 i 和 j 定下前两个参数的位置（三数之和场景简化 用 i 定位第一个参数）
3. 用 L 和 R 作为指针，根据 从低到高的排列顺序 夹逼到 target 场景 —— 如果四数之和较 target 小，L 右移；如果四数之和较 target 大，R 左移。直到 L、R 重合前，将每一组值满足 target 的解输出到 outPut 当中
4. 其中添加 while 循环避免重复数组的出现

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }
  nums.sort((a, b) => a - b);
  const outPut = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }
      let L = j + 1;
      let R = nums.length - 1;
      while (L < R) {
        let sum = nums[i] + nums[j] + nums[L] + nums[R];
        if (sum == target) {
          outPut.push([nums[i], nums[j], nums[L], nums[R]]);
          while (nums[R] == nums[R - 1] && R > 2) {
            R--;
          }
          while (nums[L] == nums[L + 1] && L < nums.length - 2) {
            L++;
          }
          R--;
          L++;
        }
        if (sum > target) {
          R--;
        }
        if (sum < target) {
          L++;
        }
      }
    }
  }
  return outPut;
};
```

## [27. 移除元素](https://leetcode.cn/problems/remove-element/)

给你一个数组 `nums` 和一个值 `val`，你需要 **[原地](https://baike.baidu.com/item/原地算法)** 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 **[原地 ](https://baike.baidu.com/item/原地算法)修改输入数组**。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

**解题思路**

快慢指针

因为比较简单，在这边就不展开描述了。贴一下代码仅供参考

```javascript
var removeElement = function (nums, val) {
  let len = nums.length;
  let k = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] != val) {
      nums[k++] = nums[i];
    }
  }
  return k;
};
```

## 小结

双指针的常见用法有两种，左右指针和快慢指针。

左右指针用于中心扩展或者夹逼压缩、这两种场景。

快慢指针用于数组或列表遍历检索特定元素场景。

相比较于常规的暴力破解法，往往能够降低一个层级的复杂度。
