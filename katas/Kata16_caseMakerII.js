const vowels = ['a', 'e', 'i', 'o', 'u'];

const makeCase = function (input, caseTypes) {
    let cases = [];
    if (caseTypes.values) {
        cases = caseTypes;
    } else {
        cases.push(caseTypes)
    }
    let txt = input;
    for (const caseType of cases) {
        let tempTxt = "";
        for (let i = 0; i < txt.length; i++) {
            const char = txt[i];
            const isEmptyChar = char === " ";
            if (!isEmptyChar && caseType === "camel") {
                tempTxt += txt[i - 1] === " " ? char.toUpperCase() : char;
            } else if (caseType === "pascal" || caseType === "title") {
                tempTxt += i === 0 || txt[i - 1] === " " ? char.toUpperCase() : !isEmptyChar || caseType === "title" ? char : "";
            } else if (caseType === "snake" || caseType === "kebab") {
                tempTxt += isEmptyChar ? caseType === "snake" ? "_" : "-" : char;
            } else if (caseType === "vowel") {
                tempTxt += vowels.indexOf(char) >= 0 ? char.toUpperCase() : char;
            } else if (caseType === "consonant") {
                tempTxt += vowels.indexOf(char) < 0 ? char.toUpperCase() : char;
            } else if (caseType === "upper" || caseType === "lower") {
                tempTxt += caseType === "upper" ? char.toUpperCase() : char.toLowerCase();
            }
        }
        txt = tempTxt;
    }
    return txt;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/*
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
 */