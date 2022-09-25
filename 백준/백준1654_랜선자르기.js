// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = `4 11
802
743
457
539`
  .toString()
  .trim()
  .split("\n");

const [K, N] = input[0].split(" ").map(Number);
const lines = input
  .slice(1)
  .sort((a, b) => a - b)
  .map(Number);

let left = 0;
let right = lines[lines.length - 1];

// 자른 숫자가 N-1 이면서 최대값일 때 +1 한 값으로 멈추기
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let pieces = lines.reduce((prev, curr) => prev + Math.floor(curr / mid), 0);

  if (pieces >= N) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
