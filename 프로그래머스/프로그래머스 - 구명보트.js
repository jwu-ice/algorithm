function solution(people = [], limit) {
  let count = 0;
  people.sort((a, b) => b - a);

  let left = 0;
  let right = people.length - 1;

  while (left < right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      left++;
    }

    count++;
  }

  if (left === right) count++;

  return count;
}

solution([70, 50, 80, 50], 100); // 3
