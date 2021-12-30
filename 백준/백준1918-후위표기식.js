var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().trim().split("");

// 계산식
const count = input.length;
const stack = [];
let result = [];
for (let i = 0; i < count; i++) {
  if (input[i] >= "A" && input[i] <= "Z") {
    result.push(input[i]);
  } else if (input[i] === "(") {
    stack.push(input[i]);
  } else if (input[i] === "*" || input[i] === "/") {
    while (
      (stack.length && stack[stack.length - 1] === "*") ||
      stack[stack.length - 1] === "/"
    ) {
      result.push(stack.pop());
    }
    stack.push(input[i]);
  } else if (input[i] === "+" || input[i] === "-") {
    while (
      (stack.length && stack[stack.length - 1] === "+") ||
      stack[stack.length - 1] === "-"
    ) {
      result.push(stack.pop());
    }
    stack.push(input[i]);
  } else if (input[i] === ")") {
    while (stack[stack.length - 1] !== "(") {
      result.push(stack.pop());
    }
    stack.pop();
  }
}
while (stack.length) {
  result.push(stack.pop());
}
console.log(result.join(""));
// 틀렸다고 떴다..ㅠ
// 이유를 잘 모르겠다.
