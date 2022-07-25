// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")

const input = `4
1 3 5 7`
  .toString()
  .trim()
  .split("\n");

console.log(input);

const value = input[1].split(" ");
console.log("value", value);

const result = value.reduce((prev, curr) => {
  for (let i = 2; i <= Math.floor(curr / 2); i++) {
    if (curr % i === 0) {
      return prev;
    }
    console.log("curr", curr);
    return prev + 1;
  }

  return prev;
}, 0);

console.log("result", result);
