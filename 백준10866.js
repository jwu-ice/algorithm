var fs = require("fs");
var input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a);

// 계산식
let deque = [];
let result = "";
const commandCount = +input[0];

for (let i = 1; i <= commandCount; i++) {
  let command = input[i].split(" ");

  if (command[0] === "push_front") deque.unshift(command[1]);
  else if (command[0] === "push_back") deque[deque.length] = command[1];
  else if (command[0] === "pop_front")
    result += deque.length ? deque.shift() + "\n" : "-1\n";
  else if (command[0] === "pop_back")
    result += deque.length ? deque.pop() + "\n" : "-1\n";
  else if (command[0] === "size") result += deque.length + "\n";
  else if (command[0] === "empty") result += deque.length ? "0\n" : "1\n";
  else if (command[0] === "front")
    result += deque.length ? deque[0] + "\n" : "-1\n";
  else if (command[0] === "back")
    result += deque.length ? deque[deque.length - 1] + "\n" : "-1\n";
}

console.log(result.trim());
