function solution(n, wires) {
    const links = {};

    wires.map((wire) => {
        const [a, b] = wire;
        if (!links[a]) {
            links[a] = [];
        }
        if (!links[b]) {
            links[b] = [];
        }
        links[a].push(b);
        links[b].push(a);
    });

    console.log(links);
}

solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
]);
