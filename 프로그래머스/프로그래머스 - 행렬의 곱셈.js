function solution(arr1, arr2) {
  const [row, col] = [arr1.length, arr2[0].length];
  let result = [...Array(row)].map(() => []);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const sum = arr1[i].reduce(
        (sum, arr1Value, rowIndex) => sum + arr1Value * arr2[rowIndex][j],
        0
      );

      result[i].push(sum);
    }
  }

  return result;
}

solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);
