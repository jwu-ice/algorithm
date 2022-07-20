// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")

const input = `5
1000 4 55
5
1 3 7 9 5 1 2 6 11 55 1000 4`
  .toString()
  .trim()
  .split("\n");

const [, stringN, , stringM] = input;

const N = stringN
  .split(" ")
  .sort((a, b) => a - b)
  .map(Number);

const M = stringM.split(" ").map(Number);

let output = "";

for (let i = 0; i < M.length; i++) {
  binarySearch(M[i], 0, N.length - 1);
}

function binarySearch(findNumber, start, end) {
  if (end - start < 0) {
    output += "0\n";
    return;
  }

  let middle = Math.floor((start + end) / 2);

  if (findNumber === N[middle]) {
    output += "1\n";
    return;
  } else if (findNumber < N[middle]) {
    end = middle - 1;
  } else {
    start = middle + 1;
  }

  binarySearch(findNumber, start, end);
}

console.log(output);

/**
 *  아래는 다른 답안.. 자료구조 Set과 has 함수로 풀었다.
 * 	위에는 이분 탐색..
 * 	아래 답이 메모리는 엄청 잡아먹지만 시간복잡도는 더 빠르다..
 */

// const [N, A, M, B] = input.map(v => v.split(" "));
// const array = new Set(A);
// const result = B.map(v => array.has(v) ? 1 : 0);
// console.log(result.join("\n"));
