function employees(arr) {
    var result = [];
    for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        var personalNumber = element.length;
        result.push("Name: ".concat(element, " -- Personal Number: ").concat(personalNumber));
    }
    return result.join('\n');
}
console.log(employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]));
console.log(employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]));
