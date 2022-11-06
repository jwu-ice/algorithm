function solution(skill, skill_trees) {
  const regularExp = new RegExp(`[^${skill}]`, "g");

  const result = skill_trees
    .map((v) => v.replace(regularExp, ""))
    .filter((x) => skill.indexOf(x) === 0);

  return result.length;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
