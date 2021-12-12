function solution(price, money, count) {
  let cost = 0;
  for (let i = 1; i <= count; i++) {
    cost += price * i;
  }
  return cost - money <= 0 ? 0 : cost - money;
}

console.log(solution(3, 20, 4));

/**
 * 1. return 삼항연산자 쓰는 방법
 * 2. 등차수열 이용하기 (가우스 공식)
 *      n * (n + 1) / 2
 *  price가 3이니까 * 3 해주면 된다.
 *
 */
