function solution(n, wires) {
    let minCount = 100;

    for (let i = 0; i < wires.length; i++) {
        const path = [];
        const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
        const visited = Array.from({ length: n + 1 }, () => false);

        for (let j = 0; j < wires.length; j++) {
            if (j === i) {
                continue;
            }

            const [x, y] = wires[j];

            graph[x][y] = 1;
            graph[y][x] = 1;
            console.log("graph", graph);
        }
    }
}

solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
]);
