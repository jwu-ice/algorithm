function solution(n) {
    const sumSet = n.reduce((prev, curr, index, arr) => {
        while (index < arr.length - 1) {
            prev.add(curr + arr[index + 1]);
            index++;
        }
        return prev;
    }, new Set());

    const result = [...sumSet].sort((a, b) => a - b);
    return result;
}

solution([5, 0, 2, 7]);
