var fs = require("fs");
var input = fs.readFileSync("/dev/stdin", "utf8").toString().trim().split("\n");
solution(input);

// solution(
//   `10 4200
// 1
// 5
// 10
// 50
// 100
// 500
// 1000
// 5000
// 10000
// 50000`.split("\n")
// );

function solution(input) {
  let [len, price] = input[0].split(" ");
  let count = 0;
  const coin = input.slice(1);

  for (let i = len - 1; i >= 0; i--) {
    while (price >= +coin[i]) {
      price -= +coin[i];
      count++;
    }
    if (price === 0) break;
  }

  console.log(count);
}
