function solution(w, h) {
  let w_divisor = {};
  let maxSameDivisor = 1;

  for (let i = 1; i <= w; i++) {
    if (!(w % i)) w_divisor[i] = i;
  }
  for (let i = 1; i <= h; i++) {
    if (!(h % i)) {
      if (w_divisor[i] === i) maxSameDivisor = i;
    }
  }
  return w * h - (w + h - maxSameDivisor);
}

console.log(solution(8, 12));
