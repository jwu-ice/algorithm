function solution(paths) {
  const refinedPaths = paths.reduce((prev, path) => {
    const splitedPath = path.split("/");

    splitedPath.forEach((value) => {
      if (!value) {
        return;
      }

      if (path === "..") {
        prev.pop();
        return;
      }

      if (path === "...") {
        prev.pop();
        prev.pop();
        return;
      }

      prev.push(value);
    });

    return prev;
  }, []);

  if (!refinedPaths.length) {
    return "/";
  }

  const answer = refinedPaths.reduce((prev, path) => {
    prev += `/${path}`;
    return prev;
  }, "");

  return answer;
}

solution(["/foo", "bar", "/baz", "...", "ab/"]);
