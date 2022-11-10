function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  let cacheQueue = [];
  let time = 0;

  while (cities.length) {
    const node = cities.shift().toLowerCase();

    const hasCache = cacheQueue.some((city) => city === node);

    if (hasCache) {
      time += 1;
      cacheQueue = cacheQueue.filter((city) => city !== node);
    } else {
      time += 5;
    }

    cacheQueue.push(node);

    if (cacheQueue.length > cacheSize) {
      cacheQueue.shift();
    }
  }

  return time;
}

solution(0, ["A", "B", "A", "A", "A"]);

// return 50
