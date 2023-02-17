function solution(my_string) {
  const onlyNum = String(my_string).replace(/[a-z]/g, "");
  const result = onlyNum
    .split("")
    .map(Number)
    .sort((a, b) => a - b);

  return result;
}

solution("hi12392");
