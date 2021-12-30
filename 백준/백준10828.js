var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 계산식
let stack = [];
let result = "";
for (i = 1; i <= input[0]; i++) {
  const command = input[i].split(" ");
  //push
  if (command[0] === "push") stack.push(command[1]);

  //pop
  if (command[0] === "pop")
    if (!stack.length) result += -1 + "\n";
    else result += stack.pop() + "\n";

  //size
  if (command[0] === "size") result += stack.length + "\n";

  //empty
  if (command[0] === "empty") {
    if (!stack.length) result += 1 + "\n";
    else result += 0 + "\n";
  }
  //top
  if (command[0] === "top") {
    if (!stack.length) result += -1 + "\n";
    else result += stack[stack.length - 1] + "\n";
  }
}
console.log(result.trim());

// 시간 초과 이슈 ..
// -> if문 간결하게 하고 console문을 따로 불러오지 않고 result에 전부 넣어
// 마지막에 console 한 번만 불러오게 함.
