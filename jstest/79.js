/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 单词搜索
 */
var exist = function (board, word) {
  let charList = word.split("");

  const visited = new Array(board.length)
    .fill()
    .map(() => new Array(board[0].length).fill(false));

  let flag = false;

  const findNextIndex = function (i, j, index) {
    if (index == charList.length) {
      flag = true;
      return;
    }

    if (i - 1 >= 0 && !visited[i - 1][j] && board[i - 1][j] == word[index]) {
      visited[i - 1][j] = true;
      findNextIndex(i - 1, j, index + 1);
      visited[i - 1][j] = false;
    }

    if (
      i + 1 < board.length &&
      !visited[i + 1][j] &&
      board[i + 1][j] == word[index]
    ) {
      visited[i + 1][j] = true;
      findNextIndex(i + 1, j, index + 1);
      visited[i + 1][j] = false;
    }

    if (j - 1 >= 0 && !visited[i][j - 1] && board[i][j - 1] == word[index]) {
      visited[i][j - 1] = true;
      findNextIndex(i, j - 1, index + 1);
      visited[i][j - 1] = false;
    }

    if (
      j + 1 < board[0].length &&
      !visited[i][j + 1] &&
      board[i][j + 1] == word[index]
    ) {
      visited[i][j + 1] = true;
      findNextIndex(i, j + 1, index + 1);
      visited[i][j + 1] = false;
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == word[0]) {
        visited[i][j] = true;
        findNextIndex(i, j, 1);
        visited[i][j] = false;
      }
      if (flag) {
        break;
      }
    }
    if (flag) {
      break;
    }
  }

  console.log(flag);
  return flag;
};

let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCCED";

exist(board, word);
