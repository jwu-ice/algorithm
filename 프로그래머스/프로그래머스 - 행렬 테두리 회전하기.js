function solution(rows, columns, queries) {
  let answer = [];
  let dimensions = [...Array(rows)].map(() => [...Array(columns)]);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      dimensions[i][j] = columns * i + j + 1;
    }
  }

  queries.forEach((query) => {
    let order = [];
    const [row1, col1, row2, col2] = [query[0] - 1, query[1] - 1, query[2] - 1, query[3] - 1];

    for (let i = row1; i <= row2; i++) {
      order.push(dimensions[i][col1]);
    }
    for (let i = col1 + 1; i <= col2; i++) {
      order.push(dimensions[row2][i]);
    }
    for (let i = row2 - 1; i >= row1; i--) {
      order.push(dimensions[i][col2]);
    }
    for (let i = col2 - 1; i > col1; i--) {
      order.push(dimensions[row1][i]);
    }

    answer.push(Math.min(...order));

    order.push(order.shift());

    for (let i = row1; i <= row2; i++) {
      dimensions[i][col1] = order.shift();
    }
    for (let i = col1 + 1; i <= col2; i++) {
      dimensions[row2][i] = order.shift();
    }
    for (let i = row2 - 1; i >= row1; i--) {
      dimensions[i][col2] = order.shift();
    }
    for (let i = col2 - 1; i > col1; i--) {
      dimensions[row1][i] = order.shift();
    }
  });

  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
