function solution(arr) {
  const calcAverage = arr.reduce((prev, curr) => {
    return prev + curr / arr.length;
  }, 0);

  return calcAverage;
}

solution([1, 2, 3, 4]);
