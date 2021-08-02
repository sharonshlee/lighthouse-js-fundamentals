const urlEncode = function (text) {
    let txt = "";
    for (let index = 0; index < text.length; index++) {
        const char = text[index];
        txt += char === " " ? "%20" : char;
    }
    return txt;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));