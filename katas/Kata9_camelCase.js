const camelCase = function (input) {
    let txt = "";
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === " ") {
            txt += input[i + 1].toUpperCase();
            i++;
        } else {
            txt += char;
        }
    }
    return txt;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));