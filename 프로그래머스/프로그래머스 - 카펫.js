function solution(brown, yellow) {
  let a = 3;
  let b = (brown + 4) / 2 - a;

  while (a <= 5000) {
    if (a >= b && a * b === brown + yellow) {
      return [a, b];
    }

    a++;
    b = (brown + 4) / 2 - a;
  }
}

solution(24, 24); // [4, 3]
