// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")

const input = `11 10 1
1 2
1 3
1 4
1 5
1 6
1 7
1 8
1 9
1 10
1 11`
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const lines = input.slice(1);

const graph = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }).fill(0));

lines.forEach((line) => {
  let [start, end] = line.split(" ");

  graph[start][end] = 1;
  graph[end][start] = 1;
});

function dfs(v, result = [], visited = Array(N + 1).fill(0)) {
  if (visited[v]) {
    return;
  }

  visited[v] = 1;
  result.push(v);

  for (let i = 1; i <= N; i++) {
    if (visited[i] === 0 && graph[v][i]) {
      dfs(i, result, visited);
    }
  }

  return result;
}

function bfs(v) {
  const queue = [];
  const result = [];
  const visited = Array(N + 1).fill(0);

  queue.push(v);
  visited[v] = 1;

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (let i = 1; i <= N; i++) {
      if (visited[i] === 0 && graph[node][i]) {
        queue.push(i);
        visited[i] = 1;
      }
    }
  }
  return result;
}

console.log(dfs(V).join(" "));
console.log(bfs(V).join(" "));
