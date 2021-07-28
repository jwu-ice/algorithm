var fs = require("fs");
var input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((a) => a);

// 계산식
let left = [];
let right = [];

for (i = 0; i < input[0].length; i++) {
  left.push(input[0][i]);
}
for (i = 2; i < +input[1] + 2; i++) {
  if (input[i][0] === "P") left.push(input[i][2]);
  if (input[i][0] === "B") left.pop();
  if (input[i][0] === "L") if (left.length) right.push(left.pop());

  if (input[i][0] === "D") if (right.length) left.push(right.pop());
}
while (right.length) {
  left.push(right.pop());
}

console.log(left.join(""));

// 시간 초과 때문에 애먹었다.
// 처음에는 "L"일 때 right.unshift, "D"일 때 right.shift 했으나
// 처리 시간이 긴 효율성이 안좋은 메소드라고 한다.
// (shift와 unshift 연산은 배열의 모든 index를 하나씩 줄이거나 늘려주는 연산이 추가로 필요해지기 때문에 느리다.)
// 커서 위치처럼 따라하려 했으나 할 수 없이 push and pop 메소드를 사용했고
// while문으로 right 배열을 거꾸로 돌려서 출력시켰다.
