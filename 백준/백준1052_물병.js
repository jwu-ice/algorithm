var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

solution(input);
function solution(input) {
  const [bottle, moveBottle] = input;
  let plusBottle = +bottle;

  while (bitCount(plusBottle) > moveBottle) {
    const bin = Number(plusBottle).toString(2);
    plusBottle += 2 ** (bin.length - bin.lastIndexOf("1") - 1);
  }
  console.log(plusBottle - bottle);
}

function bitCount(decimal) {
  return Number(decimal)
    .toString(2)
    .split("")
    .reduce((prev, curr) => (curr == 1 ? prev + +curr : prev), 0);
}
