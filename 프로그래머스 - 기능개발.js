function solution(progresses, speeds) {
  var answer = [];
  let progressess = progresses;
  let stack = [];
  let time = [];
  let n = 0;
  let count = 0;
  while (n < progressess.length) {
    count = Math.ceil((100 - progressess[n]) / speeds[n]);
    time[n] = count;
    n++;
  }
  while (time.length) {
    let res = time.shift();
    n = 0;
    n++;
    while (time[0] <= res) {
      time.shift();
      n++;
    }
    answer.push(n);
  }

  return answer;
}

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
