function solution(n) {
  let result = [];
  while (n > 0) {
    if (n % 3 === 0) {
      result.push(4);
      n = parseInt(n / 3) - 1;
    } else {
      result.push(n % 3);
      n = parseInt(n / 3);
    }
  }
  return result.reverse().join("");
}

solution(15);
