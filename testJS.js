const arr = [1, 2, 3, 4, 5, 6, 7, 8, 5];

const updateArr = (array, deleteValue, updateValue) => {
  const targetIndex = array.findIndex((value) => value === deleteValue);

  if (targetIndex < 0) {
    console.log("값을 찾을 수 없습니다.");
    return;
  }
  console.log("targetIndex", targetIndex);

  const arrResult = [
    ...array.slice(0, targetIndex),
    updateValue,
    ...arr.slice(targetIndex + 1),
  ];

  // array.splice(targetIndex, 1, updateValue);
  // console.log("array", array);

  console.log("arrResult", arrResult);
};

updateArr(arr, 5, 100);

const result = [...Array(5)].map((_, i) => i + 1);
console.log("result", result);
