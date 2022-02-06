const input = require("fs").readFileSync("/dev/stdin").toString();

solution(`3`);

function solution(input) {
  const n = +input;
  console.log((n * (n + 1)) / 2);
}
