var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  const [a, b] = input[i].split(" ");
  const result = a ** (b % 4 || 4) % 10 || 10;
  console.log(result);
}
