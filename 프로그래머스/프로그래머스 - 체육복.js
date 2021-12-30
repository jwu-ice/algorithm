function solution(n, lost, reserve) {
  let clothes = new Array(n).fill(1);
  lost.forEach((v) => {
    clothes[v - 1]--;
  });
  reserve.forEach((v) => {
    clothes[v - 1]++;
  });
  clothes.forEach((v, i) => {
    if (v === 0) {
      if (clothes[i - 1] > 1) {
        clothes[i - 1]--;
        clothes[i]++;
        return;
      }
      if (clothes[i + 1] > 1) {
        clothes[i + 1]--;
        clothes[i]++;
        return;
      }
    }
  });

  return n - clothes.filter((v) => v === 0).length;
}

solution(5, [2, 4], [1, 3, 5]);
