var fs = require("fs");
var input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((a) => a);

// 계산식
let stack = [];
let tagCheck = false;
let result = "";
for (let i = 0; i < input.length; i++) {
  let letter = input[i];
  if (letter === "<") {
    while (stack.length) {
      result += stack.pop();
    }
    result += letter;
    tagCheck = true;
  } else if (tagCheck && letter === ">") {
    result += letter;
    tagCheck = false;
  } else if (tagCheck) {
    result += letter;
  } else if (!tagCheck && letter === " ") {
    while (stack.length) {
      result += stack.pop();
    }
    result += " ";
  } else stack.push(letter);
}
while (stack.length) {
  result += stack.pop();
}
console.log(result);
// 단어 뒤집기 2
