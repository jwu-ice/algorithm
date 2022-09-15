// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")

const input = `7 7
1011111
1110001
1000001
1000001
1000001
1000001
1111111`
  .toString()
  .trim()
  .split("\n");

// 최단경로 구하는 것이므로 bfs를 이용해서 구하자.
// 동서남북 방향 갈 수 있는지 확인
// 갈 수 있는 경우를 queue에 집어넣고
// 하나하나 확인하면서 지도에 최단 경로 값을 기억

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((v) => v.split("").map(Number));

// 동서남북 방향
const [dx, dy] = [
  [1, -1, 0, 0],
  [0, 0, 1, -1],
];

const queue = [];
queue.push({ x: 0, y: 0, path: 1 });

while (queue.length) {
  const coord = queue.shift();

  // 동서남북 방향 확인
  for (let i = 0; i < dx.length; i++) {
    const nextX = coord.x + dx[i];
    const nextY = coord.y + dy[i];

    if (nextX >= 0 && nextY >= 0 && nextX < M && nextY < N) {
      if (map[nextY][nextX] === 1) {
        queue.push({ x: nextX, y: nextY, path: coord.path + 1 });
        map[nextY][nextX] = coord.path + 1;
      }
    }
  }
}

console.log(map[N - 1][M - 1]);
