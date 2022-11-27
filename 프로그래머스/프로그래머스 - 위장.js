function solution(clothes) {
  let answer = 1;

  const clothesDict = clothes.reduce((prev, [, category], index) => {
    prev[category] = (prev[category] ?? 1) + 1;
    return prev;
  }, {});

  for (let category in clothesDict) {
    answer *= clothesDict[category];
  }

  return answer - 1;
}

solution([
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
]);
