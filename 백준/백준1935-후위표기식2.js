var fs = require("fs");
var input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 계산식
const count = input[0];
const str = input[1].split("");
const stack = [];

//문자열 값 매칭
for (let i = 0; i < str.length; i++) {
  if (str[i] >= "A" && str[i] <= "Z") {
    str[i] = parseFloat(input[str[i].charCodeAt() - 63]);
    stack.push(str[i]);
  } else {
    let res_2 = stack[stack.length - 1];
    stack.pop();
    let res_1 = stack[stack.length - 1];
    stack.pop();
    if (str[i] === "*") stack.push(res_1 * res_2);
    else if (str[i] === "/") stack.push(res_1 / res_2);
    else if (str[i] === "+") stack.push(res_1 + res_2);
    else if (str[i] === "-") stack.push(res_1 - res_2);
  }
}
console.log((Math.floor(stack * 100) / 100).toFixed(2));
