function solution(lines) {
  const arr = [];
  let maxCount = 1;
  lines.forEach((v) => {
    const time = parseFloat(v.slice(17).split(" ")[0]);
    const operateTime = parseFloat(v.slice(17).split(" ")[1].replace("s", ""));
    let calNum =
      time - operateTime >= 0 ? time - operateTime : 60 + time - operateTime;

    console.log("time,operateTime,calNum :>> ", time, operateTime, calNum);
    arr.push(time, +calNum.toFixed(3));
  });

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] >= arr[i] && arr[j] <= arr[i] + 0.999) {
        maxCount = Math.max(maxCount, ++count);
        console.log(arr[j], count);
      }
    }
  }
  console.log("arr :>> ", arr);
  console.log("maxCount :>> ", maxCount);
  return maxCount;
}

// 배열에다 시작값과 끝나는 값 다 때려박고
// for문 돌려서 +0.999 더해 그 사이에 있는 값들 카운트하고 최대값 계속구함
// 나중에 다시.. 풀어보자 ㅠㅠ 잘 안풀린다.

solution(["2016-09-15 23:59:59.999 0.001s"]);
