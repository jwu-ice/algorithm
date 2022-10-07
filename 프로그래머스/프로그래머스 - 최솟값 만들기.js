function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  const result = A.reduce((prev, a, i) => {
    return prev + a * B[i];
  }, 0);

  return result;
}

solution([1, 4, 2], [5, 4, 4]);
