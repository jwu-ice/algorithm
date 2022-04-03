// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()

const input = `5`.toString().trim();

for (let i = 1; i <= input; i++) {
  console.log(" ".repeat(input - i) + "*".repeat(i));
}
