function solution(numbers) {
  const total = (9 * (9 + 1)) / 2;
  const arrTotal = numbers.reduce((prev, curr) => prev + curr, 0);
  return total - arrTotal;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
