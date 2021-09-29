function solution(array, commands) {
  return commands.map((arr) => {
    const [i, j, k] = arr;
    const res = array.slice(i - 1, j).sort((a, b) => a - b);
    return res[k - 1];
  });
}

/* 처음
function solution(array, commands) {
    var answer = [];
    for (let a = 0; a < commands.length; a++) {
      const i = commands[a][0];
      const j = commands[a][1];
      const k = commands[a][2];
      const res = array.slice(i - 1, j);
      res.sort((a, b) => a - b);
      answer[a] = res[k - 1];
    }
    return answer;
  }
 */

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
// [5, 6, 3]
