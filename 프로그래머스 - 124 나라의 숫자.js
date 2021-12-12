function solution(n) {
  let result = [];
  while (n > 0) {
    if (n % 3 === 0) {
      result = [4, ...result];
      n = parseInt(n / 3) - 1;
    } else {
      result = [n % 3, ...result];
      n = parseInt(n / 3);
    }
  }
  return result.join("");
}

solution(15);
