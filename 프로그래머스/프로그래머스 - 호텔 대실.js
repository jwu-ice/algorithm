function solution(book_time) {
  let rooms = [];
  let result = 0;
  book_time.sort();

  book_time.forEach((book) => {
    const [startTime, endTime] = book.map(changeTime);
    rooms.push(endTime + 10);
    rooms = rooms.filter((end) => startTime < end);
    result = Math.max(result, rooms.length);
  });

  return result;
}

function changeTime(strTime) {
  const [hour, min] = strTime.split(":").map(Number);
  const minTime = hour * 60 + min;
  return minTime;
}

solution([
  ["15:00", "17:00"],
  ["16:40", "18:20"],
  ["14:20", "15:20"],
  ["14:10", "19:20"],
  ["18:20", "21:20"],
]);
