function solution(topping) {
  const status = topping.reduce((prev, curr) => {
    prev[curr] = prev[curr] + 1 || 1;
    return prev;
  }, {});
  console.log(" status", status);

  let chulsoo = new Set();
  let brotherCount = Object.keys(status).length;

  const result = topping.reduce((prev, curr) => {
    status[curr]--;

    if (status[curr] <= 0) {
      brotherCount--;
    }

    chulsoo.add(curr);

    if (chulsoo.size === brotherCount) {
      prev++;
    }

    return prev;
  }, 0);

  console.log("result", result);
  return result;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]); // 2
