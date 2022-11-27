function solution(operations) {
  let queue = [];

  const commandDict = {
    I: (number) => {
      queue.push(number);
    },
    D: (number) => {
      const deleteIndex = queue.findIndex((v) => {
        return number === 1
          ? v === Math.max(...queue)
          : number === -1
          ? v === Math.min(...queue)
          : false;
      });

      queue = queue.filter((_, i) => i !== deleteIndex);
    },
  };

  operations.forEach((operation) => {
    const [command, value] = operation.split(" ");
    commandDict[command](+value);
  });

  const max = Math.max(...queue);
  const min = Math.min(...queue);
  const result = queue.length ? [max, min] : [0, 0];
  return result;
}

solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]);
