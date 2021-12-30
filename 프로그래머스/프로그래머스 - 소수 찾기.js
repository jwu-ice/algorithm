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
      console.log("j: ", j);
    }
  }
  console.table(arr);
  for (let i = 2; i <= num; i++) {
    if (arr[i] !== 0) {
      answer++;
    }
  }

  console.log("answer :>> ", answer);
  return answer;
}

solution(`50`);
/*
에라토스테네스의 체 라는 것을 이해해야 하는 수학적 문제이다.
소수를 구하기보다는 소수가 아닌 것을 제외하면 되고 그건 소수들의 배수를 제거하면 된다.
*/
