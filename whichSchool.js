const whichSchool = function (age) {
  // Your code in here ...
  let school = "";
  if (1 <= age && age < 13) {
    school = "Elementary School";
  } else if (13 <= age && age <= 18) {
    school = "Secondary School";
  } else if (age > 18) {
    school = "Lighthouse Labs";
  }
  return school;
}

console.log(whichSchool(15));
