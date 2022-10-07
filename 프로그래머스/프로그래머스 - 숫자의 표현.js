function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    n % i === 0 && i % 2 === 1 && result++;
  }

  return result;
}

solution(15);

// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와
// 주어진 자연수의 약수 중 홀수의 개수와 같다.
