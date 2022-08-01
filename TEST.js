function Test(props) {
  const a = false;
  const b = 0;

  return `<div>
      {a && <h1>a: {a}</h1>}
      {b && <h1>b: {b}</h1>}
      <h1>a: {a}</h1>
      <h1>b: {b}</h1>
    </div>`;
}

Test();
