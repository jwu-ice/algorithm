// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")

const input = `5`.toString().trim();

const cards = [...Array(Number(input))].map((_, i) => i + 1);

while (cards.length > 1) {
  cards.shift();
  cards.push(cards.shift());
}

console.log(cards[0]);
