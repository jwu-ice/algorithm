var fs = require("fs");
var input = fs.readFileSync("/dev/stdin", "utf8").toString().trim().split(" ");

solution(input);
function solution(input) {
  let [x, y] = input;
  x = x.split("");
  y = y.split("");
  let carryFlag = 0;

  if (x.length !== y.length) setPushLongerArray(x, y);
  const result = x.reduceRight((prev, curr, i) => {
    let [carry, sum] = [~~((+x[i] + +y[i]) / 10), (+x[i] + +y[i]) % 10];
    if (carryFlag) {
      if (sum >= 9) carry = 1;
      prev.push(++sum % 10);
    } else {
      prev.push(sum);
    }
    carryFlag = carry;
    return prev;
  }, []);
  carryFlag && result.push(carryFlag);
  console.log(result.reverse().join(""));
}

function setPushLongerArray(x, y) {
  while (x.length > y.length) {
    y.unshift("0");
  }
  while (x.length < y.length) {
    x.unshift("0");
  }
}
