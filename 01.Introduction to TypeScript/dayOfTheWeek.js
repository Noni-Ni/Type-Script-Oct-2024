function dayOfTheWeek(day) {
    var DaysOfTheWeek;
    (function (DaysOfTheWeek) {
        DaysOfTheWeek[DaysOfTheWeek["Monday"] = 1] = "Monday";
        DaysOfTheWeek[DaysOfTheWeek["Tuesday"] = 2] = "Tuesday";
        DaysOfTheWeek[DaysOfTheWeek["Wednesday"] = 3] = "Wednesday";
        DaysOfTheWeek[DaysOfTheWeek["Thursday"] = 4] = "Thursday";
        DaysOfTheWeek[DaysOfTheWeek["Friday"] = 5] = "Friday";
        DaysOfTheWeek[DaysOfTheWeek["Saturday"] = 6] = "Saturday";
        DaysOfTheWeek[DaysOfTheWeek["Sunday"] = 7] = "Sunday";
    })(DaysOfTheWeek || (DaysOfTheWeek = {}));
    switch (day) {
        case day = 'Monday':
        case day = 'Tuesday':
        case day = 'Wednesday':
        case day = 'Thursday':
        case day = 'Friday':
        case day = 'Saturday':
        case day = 'Sunday':
            return DaysOfTheWeek[day];
            break;
        default:
            return 'error';
            break;
    }
}
console.log(dayOfTheWeek('Monday'));
console.log(dayOfTheWeek('Friday'));
console.log(dayOfTheWeek('Invalid'));
