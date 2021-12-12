function solution(record) {
  var result = [];
  let list = new Object();

  for (let i = 0; i < record.length; i++) {
    // spl => 0: Enter, 1: uid1234, 2: Prodo
    let spl = record[i].split(" ");
    if (spl[0] === "Enter") {
      list[spl[1]] = spl[2];
      result.push(`${spl[1]}님이 들어왔습니다.`);
    } else if (spl[0] === "Leave") {
      result.push(`${spl[1]}님이 나갔습니다.`);
    } else if (spl[0] === "Change") {
      list[spl[1]] = spl[2];
    }
  }
  for (let i = 0; i < result.length; i++) {
    const last_index = result[i].indexOf("님");
    const id = result[i].slice(0, last_index);
    result[i] = result[i].replace(id, list[id]);
  }
  return result;
}

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
]);

/**
 * 프로그래머스의 다른 사람들 풀이를 보니 정말 넓게 봐야 한다는 것을 깨달았다.
 * 분해구조할당을 써서 const [state, id, nick] = v.split(" "); 나누는 것
 * 객체에 const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }
    이런식으로 할당해서 쓰기 쉽게 재사용하는 것.
 */
