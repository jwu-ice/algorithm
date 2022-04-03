// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = `150
266
427`
  .toString()
  .trim()
  .split("\n");

const multiNum = input.reduce((prev, curr) => prev * curr);
const result = [...String(multiNum)].reduce((prev, curr) => {
  prev[curr]++;
  return prev;
}, new Array(10).fill(0));

console.log(result.join("\n"));
