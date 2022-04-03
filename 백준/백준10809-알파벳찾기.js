// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("");

const input = `baekjoon`.toString().trim().split("");

const alphabet = [];
for (let i = 97; i <= 122; i++) {
  alphabet.push(String.fromCharCode(i));
}
const result = alphabet
  .map((value) => {
    return input.findIndex((v) => v === value);
  })
  .join(" ");

console.log(result);
