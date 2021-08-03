const moneyDict = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
};

const calculateChange = function (total, cash) {
    let amountToChange = cash - total;
    let changeToCust = {};

    for (const key in moneyDict) {
        amount = Math.floor(amountToChange / moneyDict[key]);
        if (amount > 0) {
            changeToCust[key] = amount;
            amountToChange %= moneyDict[key];
        }
    }

    return changeToCust;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));