function ice(input) {
    const splitedInput = input.split("\n");
    const [n, m] = splitedInput[0].split(" ");
    const graph = splitedInput.slice(1);

    let result = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dfs(i, j)) {
                result += 1;
            }
        }
    }

    function dfs(x, y) {
        if (x <= -1 || x >= n || y <= -1 || y >= m) {
            return false;
        }

        if (graph[x][y] == 0) {
            graph[x][y] = 1;

            dfs(x - 1, y);
            dfs(x, y - 1);
            dfs(x + 1, y);
            dfs(x, y + 1);
            return true;
        }
        return false;
    }
    console.log(result);
    return result;
}

ice(`4 5
00110
00011
11111
00000`);
