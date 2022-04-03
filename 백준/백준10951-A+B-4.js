// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = `1 1
2 3
3 4
9 8
5 2`
  .toString()
  .trim()
  .split("\n");

input.forEach((numArr) => {
  const [a, b] = numArr.split(" ").map(Number);
  console.log(a + b);
});
