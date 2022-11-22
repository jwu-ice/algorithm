// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .slice(0, -1);

const input = `7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

let result = "";

input.forEach((numbers) => {
  const [k, ...array] = numbers.split(" ");

  const dfs = (v, numbers) => {
    if (numbers.length >= 6) {
      result += `${numbers.join(" ")}\n`;
      return;
    }

    for (let i = v; i < k; i++) {
      dfs(i + 1, [...numbers, array[i]]);
    }
  };

  dfs(0, []);

  result += "\n";
});

console.log(result.trimEnd());
