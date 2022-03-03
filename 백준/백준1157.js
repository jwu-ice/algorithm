// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

solution(`baaa`.trim());

function solution(input) {
  if (input.length === 1) return console.log(input[0].toUpperCase());
  const sortedArr = [
    ...input
      .toUpperCase()
      .split("")
      .reduce((prev, curr) => {
        prev.has(curr) ? prev.set(curr, prev.get(curr) + 1) : prev.set(curr, 1);
        return prev;
      }, new Map()),
  ].sort((a, b) => b[1] - a[1]);

  if (sortedArr.length === 1) return console.log(sortedArr[0][0]);
  if (sortedArr[0][1] === sortedArr[1][1]) return console.log("?");
  console.log(sortedArr[0][0]);
}
