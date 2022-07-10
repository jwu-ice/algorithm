function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(0);
    let result = 0;

    function dfs(k, count) {
        result = Math.max(count, result);
    }

    dungeons.map(([limitCost, cost]) => {});

    console.log(count);
}

solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
]);
