const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// const input = `11
// 10987654321`
//   .toString()
//   .trim()
//   .split("\n");

const result = [...input[1]].reduce(
  (prev, curr) => Number(prev) + Number(curr),
  0
);
console.log(result);
