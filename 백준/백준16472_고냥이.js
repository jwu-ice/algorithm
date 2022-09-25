// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = `2
abbcaccba`
  .toString()
  .trim()
  .split("\n");

let [N, str] = input;

let left = 0;
let right = 0;
let ans = 0;

const alphabet = new Map();

while (left <= right && right < str.length) {
  const curAlphabet = str[right];

  alphabet.set(curAlphabet, (alphabet.get(curAlphabet) || 0) + 1);

  while (alphabet.size > N) {
    if (alphabet.get(str[left]) === 1) {
      alphabet.delete(str[left]);
    } else {
      alphabet.set(str[left], alphabet.get(str[left]) - 1);
    }
    left++;
  }

  ans = Math.max(ans, right - left + 1);
  right++;
}

console.log(ans);
