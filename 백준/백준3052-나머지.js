// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = `39
40
41
42
43
44
82
83
84
85`
  .toString()
  .trim()
  .split("\n");

const setArr = new Set();
input.forEach((v) => setArr.add(v % 42));
console.log(setArr.size);
