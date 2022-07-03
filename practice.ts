type masterType = {
  name: String;
  class: "fe" | "be" | "ios";
};

const masters: masterType[] = [
  { name: "crong", class: "fe" },
  { name: "honux", class: "be" },
];

function getNewList(masters: masterType[]): String[] {
  const masterInfos = masters.map((master) => {
    return `${master.name}은 ${master.class} 담당입니다`;
  });

  return masterInfos;
}

const masterInfos = getNewList(masters);
console.log(masterInfos);

masterInfos.