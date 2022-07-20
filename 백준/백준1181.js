// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")

const input = `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`
  .toString()
  .trim()
  .split("\n");

const result = [...new Set(input.slice(1))]
  .sort((a, b) => {
    if (a.length === b.length) {
      if (a < b) return -1;
    }

    return a.length - b.length;
  })
  .join("\n");

console.log(result);
