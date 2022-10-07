function solution(str) {
  let result = [0, 0];

  while (str !== "1") {
    const [convertStr, count] = convertBinary(str);
    str = convertStr;
    result[0]++;
    result[1] += count;
  }

  return result;
}

function convertBinary(str) {
  let removeZeroCount = 0;

  const onesNumberStr = String(
    str.replace(/0/g, () => {
      removeZeroCount++;
      return "";
    })
  );

  const result = onesNumberStr.length.toString(2);
  return [result, removeZeroCount];
}

solution("01110");
