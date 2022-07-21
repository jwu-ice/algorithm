// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .slice(0, -1);

const input = `6 8 10
25 52 60
5 12 13
0 0 0`
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

const example = input.map((v) => v.split(" ").map(Number));

example.forEach((values) => {
  const [a, b, c] = values.sort((x, y) => x - y);
  console.log(a ** 2 + b ** 2 === c ** 2 ? "right" : "wrong");
});
