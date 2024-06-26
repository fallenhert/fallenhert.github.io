/**
 * @param {string} s
 * @return {string[]}
 * 复原IP地址
 */
var restoreIpAddresses = function (s) {
  const charList = s.split("").map(Number);
  const length = charList.length;
  const result = [];
  const path = [];

  var backTrace = function (startIndex) {
    if ((4 - path.length) * 3 < length - startIndex) {
      return;
    }

    if (startIndex == length && path.length == 4) {
      result.push(path.join("."));
      return;
    }

    let value = 0;
    for (let i = 0; i < 3; i++) {
      value = value * 10 + charList[startIndex + i];
      if (value < 256) {
        path.push(value);
        backTrace(startIndex + i + 1);
        path.pop();
      }
      if (charList[startIndex] == 0) {
        break;
      }
    }
  };

  backTrace(0);
  return result;
};

console.log(restoreIpAddresses("25525511135"));
