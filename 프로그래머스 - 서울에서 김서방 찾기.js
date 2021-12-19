function solution(seoul) {
  const location = seoul.findIndex((v) => v === "Kim");
  return `김서방은 ${location}에 있다`;
}

solution(["Jane", "Kim"]);
