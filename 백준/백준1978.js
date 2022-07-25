// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = `4
1 3 5 7`
  .toString()
  .trim()
  .split("\n");

const value = input[1].split(" ");

const result = value.reduce((prev, curr) => {
  return isPrime(curr) ? prev + 1 : prev;
}, 0);

console.log(result);

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
