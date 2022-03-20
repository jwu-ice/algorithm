// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split("\n")
//   .map(Number);

solution(
  `3
29
38
12
57
74
40
85
61`
    .toString()
    .split("\n")
    .map(Number)
);

function solution(input) {
  const maxNum = [...input].sort((a, b) => b - a)[0];
  const maxNumIndex = input.findIndex((num) => num === maxNum);
  console.log(`${maxNum}\n${maxNumIndex + 1}`);
}
