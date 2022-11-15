function solution(citations) {
  let result = 0;

  citations.sort((a, b) => b - a);

  for (let pivot = 0; pivot < citations[0]; pivot++) {
    const quotations = citations.filter((v) => v >= pivot);

    if (pivot > quotations.length) continue;

    if (pivot >= citations.length - quotations.length) {
      result = pivot;
    }
  }

  return result;
}

solution([3, 0, 6, 1, 5]);
