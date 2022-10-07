function solution(str) {
  let stack = [];
  let bracket = str.split("");

  for (const node of bracket) {
    if (stack[stack.length - 1] === "(" && node === ")") {
      stack.pop();
      continue;
    }

    stack.push(node);
  }

  return stack.length ? false : true;
}

solution("(())()");

// 좋아요 높은 풀이
// 배열 이용하지않고 그냥 숫자값으로 계산해도 쉽게 풀 수 있음

// function solution(s) {
//   let cum = 0;
//   for (let paren of s) {
//     cum += paren === "(" ? 1 : -1;
//     if (cum < 0) {
//       return false;
//     }
//   }
//   return cum === 0 ? true : false;
// }
