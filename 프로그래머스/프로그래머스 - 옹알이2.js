function solution(babbling) {
  const count = babbling.reduce((prev, curr) => {
    // 1. 계속된 옹알이일 때
    const continueBabb = curr.match(/(aya)|(ye)|(woo)|(ma)/g);

    if (!continueBabb) return prev;

    for (let i = 0; i < continueBabb.length - 1; i++) {
      if (continueBabb[i] === continueBabb[i + 1]) return prev;
    }

    // 2. 잘못된 옹알이일 때
    const wrongBabb = curr.replace(/(aya)|(ye)|(woo)|(ma)/g, "");

    return wrongBabb === "" ? prev + 1 : prev;
  }, 0);

  return count;
}

solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
