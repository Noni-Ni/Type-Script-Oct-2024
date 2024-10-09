function dayOfTheWeek(day: string): number | string {
    enum DaysOfTheWeek {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }


    switch (day) {
        case day = 'Monday':
        case day = 'Tuesday':
        case day = 'Wednesday':
        case day = 'Thursday':
        case day = 'Friday':
        case day = 'Saturday':
        case day = 'Sunday':
            return DaysOfTheWeek[day]
            break;
        default:
            return 'error'
            break;
    }

}

console.log(dayOfTheWeek('Monday'))
console.log(dayOfTheWeek('Friday'))
console.log(dayOfTheWeek('Invalid'))