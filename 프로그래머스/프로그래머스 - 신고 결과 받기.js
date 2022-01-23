function solution(id_list, report, k) {
  const setArr = new Set(report);

  const reportCount = [...setArr].reduce((prev, curr) => {
    const dependant = curr.split(" ")[1];
    prev[dependant] = ++prev[dependant] || 1;
    return prev;
  }, {});

  console.log("reportCount :>> ", reportCount);
  const reporterList = [...setArr].reduce((prev, curr) => {
    const [reporter, dependant] = curr.split(" ");
    if (reportCount[dependant] >= k) {
      prev.push(reporter);
    }
    return prev;
  }, []);
  console.log("reporterList :>> ", reporterList);
  return id_list.map((v) => matchingIndex(v, reporterList));
}

function matchingIndex(value, list) {
  return list.reduce((prev, curr) => (value === curr ? ++prev : prev), 0);
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);

// solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"]);
