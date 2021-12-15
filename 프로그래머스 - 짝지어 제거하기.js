function solution(str) {
  let stack = [];
  for (const char of str) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
      continue;
    }
    stack.push(char);
  }
  return stack.length ? 0 : 1;
}

console.log(solution(`baabaa`));
