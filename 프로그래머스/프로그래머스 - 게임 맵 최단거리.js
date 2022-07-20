function solution(maps) {
  const MAP_WIDTH = maps[0].length;
  const MAP_HEIGHT = maps.length;
  const visited = [...maps].map((elem) => elem.map(() => 1));

  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const queue = [[0, 0]];

  while (queue.length) {
    const [y, x] = queue.shift();

    direction.forEach((move) => {
      const [moveX, moveY] = move;
      const mx = x + moveX;
      const my = y + moveY;

      if (mx >= 0 && my >= 0 && mx < MAP_WIDTH && my < MAP_HEIGHT) {
        if (maps[my][mx] === 1 && visited[my][mx] === 1) {
          visited[my][mx] = visited[y][x] + 1;
          queue.push([my, mx]);
        }
      }
    });
  }

  return visited[MAP_HEIGHT - 1][MAP_WIDTH - 1] === 1 ? -1 : visited[MAP_HEIGHT - 1][MAP_WIDTH - 1];
}

solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
]);
