function solution(numbers) {
  const getPermutation = (numbers) => {
    const result = [];
    if (numbers.length === 1) {
      return numbers.map((a) => [a]);
    }

    numbers.forEach((value, index, arr) => {
      const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
      const permutations = getPermutation(rest);
      const attached = permutations.map((a) => [value, ...a]);
      result.push(...attached);
    });
    return result;
  };

  const res = getPermutation(numbers).map((a) => a.join(""));
  return String(res.sort((a, b) => a - b)[res.length - 1]);
}
// 문자열로 바꾸어 리턴
solution([3, 30, 34, 5, 9]);

// programmers runtime error 뜸.ㅠ sort 사용하면 시간복잡도가 매우 커져서 다른 방법 이용
// 애초에 permutation을 쓰기보다 가장 큰 수를 효과적으로 구하는 방법이 필요한 것 같다

// permutation (순열) 알고리즘 사용.
// https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
