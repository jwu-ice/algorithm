function solution(n) {
  const binary = n.toString(2);
  const oneCount = checkOneCount(binary);
  let result = n + 1;

  while (true) {
    const newBinary = result.toString(2);
    if (checkOneCount(newBinary) === oneCount) {
      return result;
    }
    result++;
  }
}

function checkOneCount(checkString = "") {
  return checkString.match(/1/g).length;
}

solution(78); // 83
