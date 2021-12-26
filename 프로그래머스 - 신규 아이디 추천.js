function solution(new_id) {
  let result_id = "";
  // 1단계: 모든 대문자를 대응되는 소문자로 치환
  result_id = new_id.toLowerCase();

  // 2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
  const reg = /[^a-z0-9-_.]/g;
  result_id = result_id.replace(reg, "");

  // 3단계: 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
  result_id = result_id.replace(/\.{2,}/g, ".");

  // 4단계: 마침표(.)가 처음이나 끝에 위치한다면 제거
  if (result_id[0] === ".") result_id = result_id.slice(1);
  if (result_id[result_id.length - 1] === ".")
    result_id = result_id.slice(0, result_id.length - 1);
  // 5단계: 빈 문자열이라면, new_id에 "a"를 대입
  if (result_id === "") result_id = "a";
  // 6단계: 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  // 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
  if (result_id.length >= 16) {
    result_id = result_id.slice(0, 15);
    if (result_id[result_id.length - 1] === ".")
      result_id = result_id.slice(0, 14);
  }

  // 7단계: new_id의 길이가 2자 이하라면, new_id의 마지막 문자를
  // new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  if (result_id.length <= 2)
    while (result_id.length < 3) result_id += result_id[result_id.length - 1];
  return result_id;
}
solution(`123_.def`);
