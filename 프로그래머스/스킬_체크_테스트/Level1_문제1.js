function solution(n) {
    const result = String(n).split("").map(Number).reverse();
    return result;
}

solution(12345);
