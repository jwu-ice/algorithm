// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")

const input = `0 4 2 5 6`.toString().trim().split(" ");

const result = input.reduce((prev, curr) => prev + Math.pow(curr, 2), 0) % 10;
console.log(result);
