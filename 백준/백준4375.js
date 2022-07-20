// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")

const input = `3
7
9901`
  .toString()
  .trim()
  .split("\n");

input.forEach((n) => {
  let number = 1;

  for (let onesLength = 1; ; onesLength++) {
    number = number % n;

    if (number === 0) {
      console.log(onesLength);
      break;
    }

    number = number * 10 + 1;
  }
});
