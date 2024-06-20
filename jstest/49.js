var groupAnagrams = function (strs) {
  let newStrs = strs.map((item) => {
    const tempItem = item.split("");
    tempItem.sort();
    return tempItem.join("");
  });
  const result = [];
  const used = new Array(newStrs.length).fill(false);
  for (let i = 0; i < newStrs.length; i++) {
    if (used[i]) {
      continue;
    } else {
      const tempResult = [];
      const temp = newStrs[i];
      tempResult.push(strs[i]);
      used[i] = true;
      for (let j = i + 1; j < newStrs.length; j++) {
        if (newStrs[j] === temp) {
          tempResult.push(strs[j]);
          used[j] = true;
        }
      }
      result.push(tempResult);
    }
  }

  console.log(result);
};

groupAnagrams(["bac", "abc", "cde"]);
