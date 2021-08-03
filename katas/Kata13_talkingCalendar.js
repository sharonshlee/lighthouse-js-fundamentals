const talkingCalendar = function (date) {
    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];

    for (let i = 0; i < monthArr.length; i++) {
        if (month <= 10) {
            if (Number(month.substring(1, 2)) === i + 1) {
                month = monthArr[i];
            }
        } else {
            if (Number(month) === i + 1) {
                month = monthArr[i];
            }
        }
    }

    if (day < 10) {
        day = Number(day.substring(1, 2));
    } else {
        day = Number(day);
    }

    if (day === 1) {
        day += "st"
    } else if (day === 2) {
        day += "nd"
    } else if (day === 3) {
        day += "rd";
    } else if (day >= 4) {
        day += "th";
    }

    return `${month} ${day}, ${year}`;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));