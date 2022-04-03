// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = `5
20 10 35 30 7`
  .toString()
  .trim()
  .split("\n");

const numArr = input[1].split(" ");
const min = Math.min(...numArr);
const max = Math.max(...numArr);
console.log(min, max);
