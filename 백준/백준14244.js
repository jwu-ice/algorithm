// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")

const input = `5 3`.toString().trim().split(" ").map(Number);

const [n, m] = input;

for (let i = 0; i < n - m; i++) {
  console.log(i, i + 1);
}

for (let i = n - m; i < n - 1; i++) {
  console.log(n - m, i + 1);
}
