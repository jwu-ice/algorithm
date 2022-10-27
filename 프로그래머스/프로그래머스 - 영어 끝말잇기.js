function solution(n, words) {
  let result = [0, 0];
  let nextArray = [words[0]];

  for (let index = 1; index < words.length; index++) {
    const prev = words[index - 1];
    const curr = words[index];

    if (prev[prev.length - 1] !== curr[0] || nextArray.some((str) => str === curr)) {
      result = [(index % n) + 1, Math.floor(index / n) + 1];
      return result;
    }

    nextArray.push(curr);
  }

  return result;
}

solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]);
