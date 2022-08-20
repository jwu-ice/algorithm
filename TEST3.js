function solution(fetchPaper) {
  new Promise((resolve, reject) => setTimeout(() => resolve(fetchPaper), 1000)).then(
    (result) => result
  );
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
