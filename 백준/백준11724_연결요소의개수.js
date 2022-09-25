// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")

const input = `6 5
1 2
2 5
5 1
3 4
4 6`
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

// 첫째 줄에 정점의 개수 N, 간선의 개수 M
const [N, M] = input[0];
const lines = input.slice(1);
let visited = [...Array(N + 1)].fill(false);

const graph = lines.reduce(
  (prev, [start, end]) => {
    prev[start].push(end);
    prev[end].push(start);
    return prev;
  },
  [...Array(N + 1)].map(() => [])
);

let count = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    visited[i] = true;
    bfs(i);
    count++;
  }
}

function bfs(start) {
  const queue = [start];

  while (queue.length) {
    const next = queue.shift();

    graph[next].forEach((end) => {
      if (!visited[end]) {
        visited[end] = true;
        queue.push(end);
      }
    });
  }
}

console.log(count);
