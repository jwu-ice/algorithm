function solution(d, budget) {
  let sorted = d.sort((a, b) => a - b);
  let i = 0;
  while (budget > 0) {
    if (budget - sorted[i] < 0) return i;
    budget -= sorted[i];
    if (isNaN(budget)) return i;
    i++;
  }
  return i;
}

console.log(solution([2, 3], 10));
