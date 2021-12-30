function solution(nums) {
  let len = new Set(nums).size;
  while (len > nums.length / 2) {
    len--;
  }
  return len;
}

solution([3, 3, 3, 2, 2, 4]);
