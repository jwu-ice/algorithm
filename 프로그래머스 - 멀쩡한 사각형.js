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
  
  // console.log(solution(8, 12));
  
  function newSolution(w, h) {
    let answer = 0;
  
    for (let i = w - 1; i >= 0; i--) {
      answer += Math.floor((h / w) * i);
    }
  
    return answer * 2;
  }
  
  console.log(newSolution(8, 12));
  