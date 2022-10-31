function solution(n, a, b) {
  const result = recursive(a, b);
  return result;
}

function recursive(a, b, r = 1) {
  const newA = Math.ceil(a / 2);
  const newB = Math.ceil(b / 2);

  if (newA === newB) return r;

  return recursive(newA, newB, r + 1);
}

solution(8, 4, 7);
