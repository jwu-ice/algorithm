function solution(pri, loc) {
  let count = 0;
  let arr = [];
  for (let i = 0; i < pri.length; i++) {
    arr.push([pri[i], i]);
  }

  while (arr.length > 0) {
    let max = arr.reduce((prev, curr) => (prev > curr[0] ? prev : curr[0]), 0);

    if (arr[0][0] < max) {
      arr.push(arr[0]);
    } else {
      if (arr[0][1] === loc) return count + 1;
      count++;
    }

    arr.splice(0, 1);
  }
}
solution([1, 1, 9, 1, 1, 1], 0);
