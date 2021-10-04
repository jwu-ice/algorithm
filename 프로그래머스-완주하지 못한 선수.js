// function solution(participant, completion) {
//   let result = {};
//   let answer = "";
//   let allArr = [...participant, ...completion];
//   allArr.forEach((a) => {
//     return (result[a] = (result[a] || 0) + 1);
//   });
//   answer +=
//     Object.keys(result)[Object.values(result).findIndex((a) => a % 2 === 1)];

//   return answer;
// }

solution(["kiki", "leo", "eden"], ["eden", "kiki"]);

var solution = (participant, completion) => {
  completion.map((name) => (completion[name] = (completion[name] | 0) + 1));
  return participant.find((name) => !completion[name]--);
};
