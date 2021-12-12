function solution(s) {
  let answer = 0;

  search(s);

  function search(str) {
    let res = "";
    let arr = str.split("");
    let check = 0;
    if (!arr) {
      return answer++;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        arr[i] = "";
        arr[i + 1] = "";
        res = arr.join("");
        check++;
        console.log(res);
      }
    }
    if (!check) return;
    // 재귀함수
    search(res);
  }
  console.log("answer :>> ", answer);
  return answer;
}

solution(`baabaa`);
