// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

solution(` `.toString().trim());

function solution(input) {
  if (input.trim() === "") return console.log(0);
  const result = input.trim().split(" ").length;
  console.log(result);
}
