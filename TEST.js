function solution(v) {
  const data = v.join(",").split(",");
  console.log(data);
  const result = data
    .reduce((prev, curr, index) => {
      if (prev.includes(curr)) {
        const indexof = prev.indexOf(curr);
        prev.splice(indexof, 1);
      } else {
        prev.push(curr);
      }
      return prev;
    }, [])
    .map(Number);

  return result;
}
console.log(
  solution([
    [1, 1],
    [2, 2],
    [1, 2],
  ])
);
