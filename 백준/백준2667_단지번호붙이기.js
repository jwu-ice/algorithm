// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = `5
10110
01101
11011
10111
01111`
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
let map = input.map((v) => v.split("").map(Number)).slice(1);

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let dangi = 0;
let result = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!map[j][i]) continue;
    const count = getHouseCount(i, j);
    result.push(count);
    dangi++;
  }
}

function getHouseCount(posX, posY) {
  let queue = [[posX, posY]];
  let houseCount = 1;
  map[posY][posX] = 0;

  while (queue.length) {
    const node = queue.shift();
    const [x, y] = node;

    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < N && map[ny][nx] === 1) {
        map[ny][nx] = 0;
        queue.push([nx, ny]);
        houseCount++;
      }
    }
  }

  return houseCount;
}

console.log(dangi);
console.log(result.sort((a, b) => a - b).join("\n"));
