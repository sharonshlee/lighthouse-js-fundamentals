const squareCode = function (message) {
    let noSpacceMsg = "";
    let newMsg = [];
    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        noSpacceMsg += char === " " ? "" : char;
    }

    const row = Math.sqrt(noSpacceMsg.length);
    const column = Math.ceil(row);

    let k = 0;
    for (let i = 0; i < row; i++) {
        while (k < noSpacceMsg.length) {
            let strRow = "";
            for (let j = 0; j < column; j++) {
                if (k === noSpacceMsg.length) {
                    break;
                } else {
                    strRow += noSpacceMsg[k];
                    k++;
                }
            }
            newMsg.push(strRow);
        }
    }
    let result = "";
    for (let j = 0; j < column; j++) {
        for (let i = 0; i < newMsg.length; i++) {
            if (newMsg[i][j]) {
                result += newMsg[i][j];
            }
        }
        result += " ";
    }
    return result;
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

/*
clu hlt io
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/