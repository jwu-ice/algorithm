// 머지소트
const arr = [5, 2, 8, 4, 1, 10, 7, 3, 9, 6];

function merge(left, right) {
  const sortedArr = [];
  console.log("left,right:", left, right);
  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  console.log("sortedArr:", sortedArr);
  return [...sortedArr, ...left, ...right];
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  // console.log(left, mid, right);
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr));
