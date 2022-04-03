// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`
  .toString()
  .trim()
  .split("\n");

input.slice(1).forEach((inputArr) => {
  const result = inputArr
    .split("X")
    .reduce(
      (prev, curr) =>
        curr.length ? prev + (curr.length * (curr.length + 1)) / 2 : prev,
      0
    );
  console.log(result);
});
