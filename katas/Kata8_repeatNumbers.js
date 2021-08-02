const repeatNumbers = function (data) {
    let num = "";
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i][1]; j++) {
            num += data[i][0]
        }
        if (i + 1 < data.length) { num += ", "; }
    }
    return num;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));