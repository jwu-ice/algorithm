charCount("aaaa");
// {a: 4}

charCount("hello");
/*
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
*/

charCount("Your PIN number is 1234!");
/*
  {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    ...
  }
*/

// 리팩토링 전
// function charCount(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if (result[char] > 0) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
//   return result;
// }

function charCount(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

console.log(charCount("Hello! My name is Jwu"));
