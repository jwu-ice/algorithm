function solution(arr) {
  const result = arr.reduce((prev, curr, index) => {
    if (curr !== arr[index + 1]) {
      prev.push(curr);
    }

    return prev;
  }, []);
  return result;
}

solution([4, 4, 4, 3, 3, 2]);
