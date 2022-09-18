// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const input = `5 17`.toString().trim().split(" ").map(Number);

const [N, K] = input;

function jump(N, K) {
  if (N >= K) {
    return N - K;
  }

  if (K === 1) {
    return 1;
  }

  if (K % 2 === 0) {
    return Math.min(K - N, 1 + jump(N, K / 2));
  }

  if (K % 2) {
    return 1 + Math.min(jump(N, K - 1), jump(N, K + 1));
  }
}

console.log(jump(N, K));
