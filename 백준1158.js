var fs = require("fs");
var input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((a) => +a);

// 계산식
let n = input[0];
let k = input[1];
let queue = [];
let result = [];

for (let i = 0; i < n; i++) {
  queue.push(i + 1);
}

while (n) {
  for (let i = 0; i < k; i++) {
    queue.push(queue.shift());
  }
  result.push(queue.pop());
  n--;
}

console.log(`<${result.join(", ")}>`);
