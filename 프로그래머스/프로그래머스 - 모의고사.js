function solution(answers) {
  const answerResult = new Array(3).fill(0);
  const quitter1 = [1, 2, 3, 4, 5];
  const quitter2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const quitter3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((answer, i) => {
    if (answer === quitter1[i % quitter1.length]) answerResult[0]++;
    if (answer === quitter2[i % quitter2.length]) answerResult[1]++;
    if (answer === quitter3[i % quitter3.length]) answerResult[2]++;
  });

  const max = Math.max(...answerResult);
  const reduceParams = (prev, curr, index) => {
    if (curr === max) prev.push(index + 1);
    return prev;
  };

  return answerResult.reduce(reduceParams, []);
}

console.log(solution([1, 3, 2, 4, 2]));

/*  이전풀이
    쓸데없이 function으로 나누고 규칙을 만들었다.
    const failer = [2,1,2,3,2,4,2,5]; 이런식으로 만들면 되는데.. ㅠ
*/

function solution2(answers) {
  const answerCount = [0, 0, 0];
  answers.forEach((value, index) => {
    if (value === failer_1(index)) answerCount[0]++;
    if (value === failer_2(index)) answerCount[1]++;
    if (value === failer_3(index)) answerCount[2]++;
  });

  let result = [];
  answerCount.forEach((value, index, arr) => {
    if (value === Math.max(...arr)) result = [...result, index + 1];
  });
  return result;
}

function failer_1(index) {
  let store = [1, 2, 3, 4, 5];
  return store[index % 5];
}

function failer_2(index) {
  if (index % 2 === 0) return 2;
  if (index % 8 === 1) return 1;
  if (index % 8 === 3) return 3;
  if (index % 8 === 5) return 4;
  if (index % 8 === 7) return 5;
}

function failer_3(index) {
  let store = [3, 1, 2, 4, 5];
  return store[Math.floor(index / 2) % 5];
}
