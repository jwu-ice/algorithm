const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((v) => v.trim());

solution(
  `3
  40 80 60`
    .split("\n")
    .map((v) => v.trim())
);

function solution(input) {
  const score = [...input[1].split(" ")];
  const M = Math.max(...score);
  const newAverage = score
    .map((v) => (v / M) * 100)
    .reduce((prev, curr, _, arr) => prev + curr / arr.length, 0);
  console.log(newAverage);
}
