function solution(board, moves) {
  const basket = [];
  let popCount = 0;

  for (const move of moves) {
    let depth = 0;

    while (depth < board.length) {
      let doll = board[depth][move - 1];
      if (doll !== 0) {
        if (basket[basket.length - 1] === doll) {
          basket.pop();
          popCount += 2;
        } else {
          basket.push(doll);
        }

        board[depth][move - 1] = 0;
        break;
      }
      depth++;
    }
  }

  return popCount;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 1, 1, 1, 1, 2, 2, 1]
);

/*  이전풀이
    배열을 보기좋게 눕혀서 새로 만듦
    값이 한 눈에 와 닿긴 하지만 풀이과정 자체가 더럽다.. 
 */
function solution2(board, moves) {
  let newBoard = [];
  let basket = [];
  let lostCount = 0;

  for (let i = 0; i < board.length; i++) {
    let widthBoard = [];
    for (let j = 0; j < board.length; j++) {
      widthBoard = [...widthBoard, board[j][i]];
    }
    newBoard = [...newBoard, widthBoard];
  }

  // 인형뽑기를 해보자
  moves.forEach((choiceIndex) => {
    let curBoard = newBoard[choiceIndex - 1];
    let _findIndex = curBoard.findIndex((value) => value > 0);

    if (!curBoard[_findIndex]) {
      return;
    }

    basket = [...basket, curBoard[_findIndex]];
    curBoard[_findIndex] = 0;
    if (basket[basket.length - 1] === basket[basket.length - 2]) {
      basket.splice(basket.length - 2, 2);
      lostCount += 2;
    }
  });
  return lostCount;
}
