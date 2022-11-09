function solution(n) {
  let [prev, curr] = [0, 1];
  let result = 1;

  for (let i = 2; i <= n; i++) {
    prev = curr % 1234567;
    curr = result;
    result = prev + curr;
  }

  return result;
}

console.log(solution(2000));

/**
 *  1 1
 *  2 2
 *  3 3
 *  4 5
 *  5 8 3 + 4 + 1
 */
