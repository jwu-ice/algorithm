function solution(num) {
  let answer = 0;
  if (num >= 2 && num <= 1000000) {
  } else {
    return false;
  }
  //
  let arr = [];
  for (let i = 2; i <= num; i++) {
    arr[i] = i;
  }
  for (let i = 2; i <= num; i++) {
    if (arr[i] === 0) continue;
    for (let j = i + i; j <= num; j += i) {
      arr[j] = 0;
    }
  }
  for (let i = 2; i <= num; i++) {
    if (arr[i] !== 0) answer++;
  }
  return answer;
}

solution(`1000`);
