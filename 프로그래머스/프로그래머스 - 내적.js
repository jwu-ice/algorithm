function solution(a, b) {
  return a.reduce((prev, curr, i) => prev + curr * b[i], 0);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
