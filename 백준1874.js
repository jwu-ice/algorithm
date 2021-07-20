var fs = require("fs");
var input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(function (a) {
    return +a;
  }); // 계산식
const countInput = input[0];
// input 값
let numbering = input.slice(1);
// 1부터 순서대로 담을 배열
let stack = [];
// +, - 받을 배열
let result = [];

for (i = 1; i <= countInput; i++) {
  stack.push(i);
  result.push("+");
  while (stack.length > 0 && stack[stack.length - 1] === numbering[0]) {
    numbering.shift();
    stack.pop();
    result.push("-");
  }
}
stack.length === 0 ? result.forEach((a) => console.log(a)) : console.log("NO");

// 시간초과 이슈...
