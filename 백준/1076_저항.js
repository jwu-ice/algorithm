var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const color = {
  black: { value: 0, multi: 1 },
  brown: { value: 1, multi: 10 },
  red: { value: 2, multi: 100 },
  orange: { value: 3, multi: 1000 },
  yellow: { value: 4, multi: 10000 },
  green: { value: 5, multi: 100000 },
  blue: { value: 6, multi: 1000000 },
  violet: { value: 7, multi: 10000000 },
  grey: { value: 8, multi: 100000000 },
  white: { value: 9, multi: 1000000000 },
};

const result = input.reduce((prev, curr, i) => {
  i < 2 ? (prev += color[curr]["value"]) : (prev *= color[curr]["multi"]);
  return prev;
}, "");

console.log(result);
