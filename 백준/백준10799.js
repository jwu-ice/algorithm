var fs = require("fs");
var input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((a) => a);

// 계산식
let count = 0;
const stack = [];

for (let i = 0; i < input.length; i++) {
  // 열린 파이프 스택에 넣는다.
  if (input[i] === "(") stack.push(input[i]);
  // 닫힌 파이프를 pop하면서 파이프인지 레이저인지 확인.
  else {
    stack.pop();
    // 레이저
    if (input[i - 1] === "(") count += stack.length;
    // 파이프
    else count++;
  }
}
console.log(count);
// 스택을 이용
