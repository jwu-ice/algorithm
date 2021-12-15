function solution(x) {
  const valuePos = x.split("").reduce((prev, curr) => prev + curr, 0);
  console.log("valuePos :>> ", valuePos);
}

console.log(solution(12));
