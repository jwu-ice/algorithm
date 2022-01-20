function solution(str) {
  let result = "";
  let upperFlag = true;
  for (const val of str) {
    if (val === " ") {
      result += " ";
      upperFlag = true;
    } else if (upperFlag) {
      result += val.toUpperCase();
      upperFlag = false;
    } else {
      result += val.toLowerCase();
      upperFlag = true;
    }
  }
  return result;
}

console.log(solution("try hello world"));
