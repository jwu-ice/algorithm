function solution(arr) {
  let result = arr[arr.length - 1];

  while (!arr.every((v) => result % v === 0)) {
    result++;
  }

  return result;
}

solution([2, 6, 8, 14]);
