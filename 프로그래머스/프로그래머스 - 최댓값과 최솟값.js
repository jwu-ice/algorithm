function solution(input) {
  const numbers = input.split(" ").sort((a, b) => a - b);
  return `${numbers[0]} ${numbers[numbers.length - 1]}`;
}

const abc = solution("1 2 3 4");
