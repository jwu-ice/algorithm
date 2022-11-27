function solution(s) {
  let result = 0;
  let brackets = s.split("");

  for (let i = 0; i < brackets.length; i++) {
    isRightBracket(brackets) && result++;
    brackets.push(brackets.shift());
  }

  return result;
}

function isRightBracket(brackets) {
  let stack = [];

  for (const bracket of brackets) {
    bracketTable[stack[stack.length - 1]] === bracket
      ? stack.pop()
      : stack.push(bracket);

    if (stack[0]) {
      const isRight = /[\)\}\]]/.test(stack[0]);
      if (isRight) {
        return false;
      }
    }
  }

  return !stack.length;
}

const bracketTable = {
  "[": "]",
  "{": "}",
  "(": ")",
};

solution("}]()[{");
