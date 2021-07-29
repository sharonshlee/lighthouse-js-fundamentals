const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const judgeVegetable_2 = function (vegetables, metric) {
  return vegetables.sort((a, b) => {
    return metric === "redness"
      ? a.redness < b.redness
        ? 1
        : -1
      : a.plumpness < b.plumpness
        ? 1
        : -1;
  })[0].submitter;
};

const judgeVegetable = function (vegetables, metric) {
  let highestRank = 0;
  let highestSubmitter = "";

  for (let vege of vegetables) {
    if (metric === "redness") {
      if (highestRank < vege.redness) {
        highestRank = vege.redness;
        highestSubmitter = vege.submitter;
      }
    } else if (metric === "plumpness") {
      if (highestRank < vege.plumpness) {
        highestRank = vege.plumpness;
        highestSubmitter = vege.submitter;
      }
    } else return "";
  }
  return highestSubmitter;
};

//console.log(judgeVegetable(vegetables, "redness"));
console.log(judgeVegetable_2(vegetables, "redness"));
