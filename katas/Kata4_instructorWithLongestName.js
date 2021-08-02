const instructorWithLongestName = function(instructors) {
    let longestName = "";
    let index = 0;
    for (let i = 0; i < instructors.length; i++) {
        if (longestName.length < (instructors[i].name).length) {
            longestName = instructors[i].name;
            index = i;
        }
    }
    return instructors[index];
  };
  
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));