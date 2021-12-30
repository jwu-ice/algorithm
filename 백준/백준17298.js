var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 계산식
const count = input[0];
const value = input[1].split(" ");
const stack = [];
let result = new Array(value.length).fill(-1);
for (let i = 0; i < count; i++) {
  if (!stack.length) stack.push(i);
  while (stack.length && value[i] > value[stack[stack.length - 1]]) {
    result[stack.pop()] = value[i];
  }
  stack.push(i);
}
console.log(result.join(" "));
