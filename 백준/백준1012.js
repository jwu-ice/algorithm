// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")

const input = `1
5 3 6
0 2
1 2
2 2
3 2
4 2
4 0`
  .toString()
  .trim()
  .split("\n");

// 가로길이 M, 세로길이 N, 배추개수 K, 배추위치 X,Y

const inputCount = Number(input[0]);
const inputLine = input.slice(1).map((v) => v.split(" "));

const [dx, dy] = [
  [1, -1, 0, 0],
  [0, 0, 1, -1],
];
let maps = [];
let graph = [];

// 지도 만들고 하나씩 넣어주기
for (const [X, Y, K] of inputLine) {
  if (K) {
    graph = Array.from({ length: Y }, () => Array.from({ length: X }, () => 0));
    maps.push(graph);
    continue;
  }
  graph[Y][X] = 1;
}

// 지도마다 벌레 숫자 출력하기
maps.forEach((map) => {
  let wormCount = 0;
  const mapX = map[0].length;
  const mapY = map.length;

  for (let i = 0; i < mapX; i++) {
    for (let j = 0; j < mapY; j++) {
      if (!map[j][i]) continue;
      findWorm(map, [i, j]);
      wormCount++;
    }
  }

  console.log(wormCount);
});

// bfs: 1을 찾으면 인접 전부 0으로 채우기
function findWorm(map, startPos = [0, 0]) {
  let queue = [startPos];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];

      if (
        nextX >= 0 &&
        nextX < map[0].length &&
        nextY >= 0 &&
        nextY < map.length &&
        map[nextY][nextX] == 1
      ) {
        queue.push([nextX, nextY]);
        map[nextY][nextX] = 0;
      }
    }
  }
}
