function solution(numbers, hand) {
  let answer = "";
  let LPos = location("*");
  let RPos = location("#");
  for (let i = 0; i < numbers.length; i++) {
    if ([1, 4, 7].includes(numbers[i])) {
      LPos = location(numbers[i]);
      answer += "L";
    } else if ([3, 6, 9].includes(numbers[i])) {
      RPos = location(numbers[i]);
      answer += "R";
    } else if ([2, 5, 8, 0].includes(numbers[i])) {
      let L_Distance =
        Math.abs(location(numbers[i]).x - LPos.x) +
        Math.abs(location(numbers[i]).y - LPos.y);
      let R_Distance =
        Math.abs(location(numbers[i]).x - RPos.x) +
        Math.abs(location(numbers[i]).y - RPos.y);
      if (L_Distance > R_Distance) {
        RPos = location(numbers[i]);
        answer += "R";
      } else if (L_Distance < R_Distance) {
        LPos = location(numbers[i]);
        answer += "L";
      } else if (L_Distance === R_Distance) {
        if (hand === "right") {
          RPos = location(numbers[i]);
          answer += "R";
        } else if (hand === "left") {
          LPos = location(numbers[i]);
          answer += "L";
        }
      }
    }
  }

  return answer;
}

function location(num) {
  let pos = {};
  switch (num) {
    case 1:
      pos = { x: 0, y: 0 };
      break;
    case 2:
      pos = { x: 1, y: 0 };
      break;
    case 3:
      pos = { x: 2, y: 0 };
      break;
    case 4:
      pos = { x: 0, y: 1 };
      break;
    case 5:
      pos = { x: 1, y: 1 };
      break;
    case 6:
      pos = { x: 2, y: 1 };
      break;
    case 7:
      pos = { x: 0, y: 2 };
      break;
    case 8:
      pos = { x: 1, y: 2 };
      break;
    case 9:
      pos = { x: 2, y: 2 };
      break;
    case "*":
      pos = { x: 0, y: 3 };
      break;
    case 0:
      pos = { x: 1, y: 3 };
      break;
    case "#":
      pos = { x: 2, y: 3 };
      break;
  }

  return pos;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
