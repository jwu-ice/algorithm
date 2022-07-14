// 트리 + 완전탐색
function solution(n, wires) {
    const links = {};
    wires.map((w) => {
        // 풀이과정 1
        const [a, b] = w;
        if (!links[a]) links[a] = [];
        if (!links[b]) links[b] = [];
        links[a].push(b);
        links[b].push(a);
    });

    const searchTree = (root, exception) => {
        let count = 0;
        const queue = [root];
        const visited = [];
        visited[root] = true;

        while (queue.length) {
            const curr = queue.pop();
            links[curr].map((next) => {
                if (next !== exception && !visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            });

            count++;
        }
        return count;
    };

    let answer = 100;

    wires.map((w, i) => {
        const [a, b] = w;
        const diff = Math.abs(searchTree(a, b) - searchTree(b, a));
        answer = answer > diff ? diff : answer;
    });

    console.log("answer", answer);
    return answer;
}

solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
]);
