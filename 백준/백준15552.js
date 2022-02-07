const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

solution(
  `5
1 1
12 34
5 500
40 60
1000 1000`
    .toString()
    .split("\n")
);

function solution(input) {
  let str = "";
  for (let i = 1; i <= input[0]; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    str += `${a + b}\n`;
  }
  console.log(str.trim());
}
