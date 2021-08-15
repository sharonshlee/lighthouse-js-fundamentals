const courseDict = ["iOS", "Web", "Blockchain"];

const organizeInstructors = function (instructors) {
  let sortedInstructors = {};
  let webInstructor = [];
  let iOSInstructor = [];
  let blockChainInstructor = [];

  for (const instructor of instructors) {
    let course = instructor.course;
    let groupInstructors = []

    if (course === courseDict[0]) {
      iOSInstructor.push(instructor.name);
      sortedInstructors[course] = iOSInstructor;
    } else if (course === courseDict[1]) {
      webInstructor.push(instructor.name);
      sortedInstructors[course] = webInstructor;
    } else if (course === courseDict[2]) {
      blockChainInstructor.push(instructor.name);
      sortedInstructors[course] = blockChainInstructor;
    }
  }
  return sortedInstructors;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));

console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));

/* Better Solution
cconst organizeInstructors = function (instructors) {
    let result = {};
    instructors.forEach(function (elem) {
        if (!result[elem.course]) {
            result[elem.course] = [];
        }
        result[elem.course].push(elem.name);
    });
    return result;
};
 */