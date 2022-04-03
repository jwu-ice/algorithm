// const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const input = `5`.toString().trim();

let result = "";
for (let i = 1; i <= input; i++) {
  result += i + "\n";
}
console.log(result.trimEnd());
