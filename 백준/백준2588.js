const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

solution(
  `472
385`
    .trim()
    .split("\n")
);

function solution(input) {
  const a = input[0] * input[1][2];
  const b = input[0] * input[1][1];
  const c = input[0] * input[1][0];
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(c * 10 ** 2 + b * 10 + a);
}
