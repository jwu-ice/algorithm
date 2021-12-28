function solution(n, times) {
  let left = 1;
  let right = n * Math.max(...times);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let count = times.reduce((prev, curr) => prev + Math.floor(mid / curr), 0);

    console.log("left,mid,right,count :>> ", left, mid, right, count);
    count >= n ? (right = mid) : (left = mid + 1);
  }

  return left;
}

solution(6, [2, 10]);
