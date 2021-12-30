function solution(absolutes, signs) {
  return absolutes.reduce(
    (prev, curr, index) => (signs[index] ? prev + curr : prev - curr),
    0
  );
}

solution([4, 7, 12], [true, false, true]);
