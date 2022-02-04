const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => v.trim());

solution(`3 2`.split(" ").map((v) => v.trim()));
function solution(input) {
  console.log(input[0] - input[1]);
}
