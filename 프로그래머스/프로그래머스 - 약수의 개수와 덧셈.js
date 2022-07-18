function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    result += 약수구하기(i);
  }
  return result;
}

function 약수구하기(number) {
  let count = 1;
  let i = 2;

  while (i <= number) {
    if (number % i === 0) {
      count++;
    }

    i++;
  }
  return count % 2 === 0 ? number : -number;
}

solution(13, 17);
// 43
