// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")

const N = Number(`1`.toString().trim());

let twoSquare = 0;

for (let i = 0; twoSquare < 500000; i++) {
  twoSquare = 2 ** i;

  if (twoSquare >= N) {
    break;
  }
}
const startNumber = N - twoSquare / 2;
console.log(2 * startNumber);
