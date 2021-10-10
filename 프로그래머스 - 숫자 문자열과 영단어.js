function solution(s) {
  let result = s;
  let eng_num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  eng_num.forEach((value, i) => {
    if (s.includes(value)) {
      let reg = new RegExp(eng_num[i], `g`);
      result = result.replace(reg, i);
    }
  });
  return Number(result);
}

solution(`one4seveneight`);
