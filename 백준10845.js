var fs = require("fs");
var input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a);

// 계산식
const countInput = +input[0];
let stack = [];
let result = "";

for (let i = 1; i <= countInput; i++) {
  const command = input[i].split(" ");

  if (command[0] === "push") stack.push(input[i][5]);
  else if (command[0] === "pop")
    stack.length ? (result += `${stack.shift()}\n`) : (result += `-1\n`);
  else if (command[0] === "size") result += `${stack.length}\n`;
  else if (command[0] === "empty")
    stack.length ? (result += `0\n`) : (result += `1\n`);
  else if (command[0] === "front")
    stack.length ? (result += `${stack[0]}\n`) : (result += `-1\n`);
  else
    stack.length
      ? (result += `${stack[stack.length - 1]}\n`)
      : (result += `-1\n`);
}
result = result.trim();
console.log(result);

// 큐를 구현해서 만들었어야 했나보당
