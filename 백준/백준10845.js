// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .slice(1);

const input = `15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front`
  .toString()
  .trim()
  .split("\n");

let queue = [];
let result = "";

for (let i = 1; i <= input[0]; i++) {
  const command = input[i].split(" ");
  switch (command[0]) {
    case "push":
      queue.push(command[1]);
      break;

    case "pop":
      result += `${queue.length ? queue.shift() : -1}\n`;
      break;

    case "size":
      result += `${queue.length}\n`;
      break;

    case "empty":
      result += `${!queue.length ? 1 : 0}\n`;
      break;

    case "front":
      result += `${queue.length ? queue[0] : -1}\n`;
      break;

    case "back":
      result += `${queue.length ? queue[queue.length - 1] : -1}\n`;
      break;

    default:
      break;
  }
}

console.log(result.trimEnd());
