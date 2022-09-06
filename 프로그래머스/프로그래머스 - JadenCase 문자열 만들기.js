function solution(input) {
  const result = input
    .split(" ")
    .reduce((prev, word) => {
      if (typeof word[0] === "number" || word === "") {
        return [...prev, word];
      }

      const newWord = word
        .split("")
        .map((v, i) => (i === 0 ? v.toUpperCase() : v.toLowerCase()))
        .join("");

      return [...prev, newWord];
    }, [])
    .join(" ");

  return result;
}

solution("3people unFollowed me");
//"3people Unfollowed Me"
