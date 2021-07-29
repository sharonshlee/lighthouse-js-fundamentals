const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];

films[2] = "Jurassic Park";
console.log(films);
films.push("A.I.");
console.log(films);


console.log(director + " is the director of " + films.length + " films");

films.push("E.T.");
console.log(films);
console.log(director + " is the director of " + films.length + " films");