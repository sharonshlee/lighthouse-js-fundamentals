const multiplicationTable = function (maxValue) {
    let line = "";
    for (let index = 1; index <= maxValue; index++) {
        for (let count = 1; count <= maxValue; count++) {
            line += (index * count) + " ";
        }
        line += "\n";
    }
    return line;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));