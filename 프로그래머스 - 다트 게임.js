function solution(dartResult) {
  const calc = {
    S: 1,
    D: 2,
    T: 3,
    "*": (arr) => {
      arr[arr.length - 1] *= 2;
      if (arr.length > 1) {
        arr[arr.length - 2] *= 2;
      }
    },
    "#": (arr) => {
      arr[arr.length - 1] *= -1;
    },
  };

  let darts = dartResult.match(/\d.?\D/g);
  console.log("darts :>> ", darts);

  const totalArr = dartResult.split("").reduce((prev, curr, i) => {
    if (/[SDT]/.test(curr)) {
      const isTen = dartResult[i - 2] === "1" && dartResult[i - 1] === "0";
      prev.push(Math.pow((isTen ? 10 : 0) || +dartResult[i - 1], calc[curr]));
    }

    if (/[*#]/.test(curr)) {
      calc[curr](prev);
    }

    return prev;
  }, []);

  return totalArr.reduce((prev, curr) => prev + curr, 0);
}

solution("1D2S#10S");
