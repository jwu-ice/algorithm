// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = `10 5
1 10 4 9 2 3 8 5 7 6`
  .toString()
  .trim()
  .split("\n");

const [limitNum, numArr] = [
  input[0].split(" ")[1],
  input[1].split(" ").map(Number),
];

const result = numArr.filter((v) => v < limitNum && v >= 1).join(" ");
console.log(result);
