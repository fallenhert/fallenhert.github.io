/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0,
    right = matrix[0].length;
  let top = 0;
  bottom = matrix.length;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {}
  }
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
