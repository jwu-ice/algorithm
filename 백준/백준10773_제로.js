// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map(Number)
//   .slice(1);

const input = `10
1
3
5
4
0
0
7
0
0
6
`
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .slice(1);

const result = input
  .reduce((prev, curr) => {
    curr ? prev.push(curr) : prev.pop();
    return prev;
  }, [])
  .reduce((prev, curr) => prev + curr, 0);

console.log(result);
