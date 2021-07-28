var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 계산식
let stack = [];
for (i = 1; i <= input[0]; i++) {
  const command = input[i].split(" ");
  //push
  if (command[0] === "push") {
    stack.push(command[1]);
  }
  //pop
  if (command[0] === "pop") {
    if (stack.length === 0) {
      console.log(-1);
    } else {
      console.log(stack.pop());
    }
  }
  //size
  if (command[0] === "size") {
    console.log(stack.length);
  }
  //empty
  if (command[0] === "empty") {
    if (stack.length === 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  }
  //top
  if (command[0] === "top") {
    if (stack.length === 0) {
      console.log(-1);
    } else {
      console.log(stack[stack.length - 1]);
    }
  }
}

// 시간 초과 이슈 ..
