function solution(lottos, win_nums) {
  let answer = [];
  let check = 0;
  lottos.forEach((a) => {
    win_nums.includes(a) && check++;
  });

  const zeroNum = lottos.filter((a) => a === 0).length;
  if (check >= 2) {
    answer[0] = 7 - check - zeroNum;
    answer[1] = 7 - check;
  } else {
    answer[0] = 7 - check - zeroNum;
    answer[1] = 6;
  }
  return answer.map((a) => (a > 6 ? (a = 6) : a));
}

solution([44, 1, 0, 0, 3, 2], [31, 10, 45, 1, 6, 19]);
