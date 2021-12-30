function solution(nums) {
  let [left, middle, right, count] = [0, 1, 2, 0];
  const len = nums.length - 1;
  do {
    if (isPrimeNumber(nums[left] + nums[middle] + nums[right])) count++;

    if (middle >= len - 1 && right >= len) {
      left += 1;
      middle = left + 1;
      right = middle + 1;
      continue;
    }
    right >= len ? (right = ++middle + 1) : right++;
  } while (left <= len - 2);

  return count;
}

function isPrimeNumber(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

solution([1, 2, 3, 4]);
