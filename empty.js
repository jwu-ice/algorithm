// charCount("aaaa");
// {a: 4}

// charCount("hello");
/*
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}
*/

// charCount("Your PIN number is 1234!");
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

// function charCount(str) {
//   let obj = {};
//   for (let char of str) {
//     if (isAlphaNumeric(char)) {
//       char = char.toLowerCase();
//       obj[char] = ++obj[char] || 1;
//     }
//   }
//   return obj;
// }

// function isAlphaNumeric(char) {
//   const code = char.charCodeAt(0);
//   if (
// !(code > 47 && code < 58) &&
// !(code > 64 && code < 91) &&
// !(code > 96 && code < 123)
//   ) {
//     return false;
//   }
//   return true;
// }

// console.log(charCount("Hello! My name is Jwu"));

// 빈도수 세기 패턴
// 내 답
// function validAnagram(one, two) {
//   const obj = {};
//   for (const val of one) {
//     obj[val] = (obj[val] || 0) + 1;
//   }

//   for (const val of two) {
//     obj[val] === 1 ? delete obj[val] : obj[val]--;
//   }

//   for (const val in obj) {
//     if (obj.hasOwnProperty(val)) {
//       return false;
//     }
//   }
//   return true;
// }

// validAnagram("awesome", "awesom");

// 콜트샘 답
// function validAnagram(one, two) {
//   if (one.length !== two.length) {
//     return false;
//   }

//   const obj = {};

//   for (const val of one) {
//     obj[val] = (obj[val] || 0) + 1;
//   }

//   for (const val of two) {
//     if (!obj[val]) {
//       return false;
//     }
//     obj[val]--;
//   }

//   return true;
// }
// validAnagram("awesome", "awesom");

// 다중 포인터 패턴
// 내 답
// function countUniqueValues(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }

//   let left = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[left] < arr[i]) {
//       left++;
//       arr[left] = arr[i];
//     }
//   }

//   return left + 1;
// }

// console.log(countUniqueValues([1, 2, 2, 2, 2, 3]));



