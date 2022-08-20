function createQueryString(object) {
  let result = "";
  let isFirst = true;
  const objectEntries = Object.entries(object);

  if (!objectEntries.length) {
    return "";
  }

  objectEntries.forEach((entry) => {
    let [key, value] = entry;

    if (value === null || value === undefined) {
      return;
    }

    if (Array.isArray(value)) {
      console.log("value", value);
      value.forEach((arrayValue) => {
        result += isFirst ? "?" : "&";
        result += `${key}=${encodeURIComponent(arrayValue)}`;
      });

      return;
    }

    result += isFirst ? "?" : "&";
    isFirst = false;

    result += `${key}=${encodeURIComponent(value)}`;
  });

  return result;
}

function solution(input) {
  var object = JSON.parse(input);
  var answer = createQueryString(object);
  return answer;
}

solution('{"foo":false,"bar":[1,2,3],"baz":null,"foobar":3333}');
