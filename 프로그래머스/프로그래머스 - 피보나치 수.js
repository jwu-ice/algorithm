function solution(n) {
  let [prev, next] = [0, 1];
  let result = 1;

  for (let i = 3; i <= n; i++) {
    prev = next;
    next = result;
    result = (prev + next) % 1234567;
  }

  return result;
}

solution(1500);
