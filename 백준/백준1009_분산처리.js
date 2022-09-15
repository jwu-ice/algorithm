// var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = `5
1 6
3 7
6 2
7 100
9 635`;

let result = "";

for (let i = 1; i <= input[0]; i++) {
  const [a, b] = input[i].split(" ");
  result += `${a ** (b % 4 || 4) % 10 || 10}\n`;
}

console.log(result.trimEnd());
