function even(elements) {
    var evenStrArr = [];
    for (var index = 0; index < elements.length; index++) {
        if (index % 2 == 0) {
            evenStrArr.push(elements[index]);
        }
    }
    var evenStr = evenStrArr.join(' ');
    return evenStr.trim();
}
console.log(even(['20', '30', '40', '50', '60']));
console.log(even(['5', '10']));
