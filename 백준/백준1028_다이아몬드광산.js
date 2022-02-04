// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ")
//   .map((v) => v.trim());

solution(
  `5 5
01100
01011
11111
01111
11111`
    .split("\n")
    .map((v) => v.trim())
);
function solution(input) {
  const [height, width] = input[0].split(" ");
  const mineArr = input.slice(1).map((v) => v.split(""));
  console.log("mineArr :>> ", mineArr);
}
