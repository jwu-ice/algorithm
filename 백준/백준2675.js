const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// solution(
//   `2
// 3 ABC
// 5 /HTP`
//     .toString()
//     .split("\n")
// );

function solution(input) {
  input.slice(1).forEach((val) => {
    const [repeat, str] = val.split(" ");
    const result = str.split("").reduce((prev, curr) => {
      let repeatStr = "";
      for (let i = 0; i < repeat; i++) {
        repeatStr += curr;
      }
      return prev + repeatStr;
    }, "");
    console.log(result);
  });
}
