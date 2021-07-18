solution(`5 8 4`);
function solution(params) {
  const [a, b, c] = params.split(" ").map((a) => +a);
  console.log((a + b) % c);
  console.log(((a % c) + (b % c)) % c);
  console.log((a * b) % c);
  console.log(((a % c) * (b % c)) % c);
}
