// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ")
//   .map((v) => +v.trim());

solution(`7 3`.split(" ").map((v) => +v.trim()));

function solution(input) {
  const [a, b] = input;
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(Math.floor(a / b));
  console.log(a % b);
}
