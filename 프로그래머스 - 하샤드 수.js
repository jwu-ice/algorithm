function solution(x) {
  const total = String(x)
    .split("")
    .reduce((prev, curr) => +prev + +curr, 0);

  return x % total === 0 ? true : false;
}

console.log(solution(11));
