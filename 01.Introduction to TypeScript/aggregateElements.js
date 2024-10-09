function aggregateElements(arr) {
    var result = [];
    var sum = 0;
    var sum2 = 0;
    var strArr = [];
    for (var index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
        sum2 = sum2 + 1 / arr[index];
        strArr.push(String(arr[index]));
    }
    console.log(sum);
    console.log(sum2);
    console.log(strArr.join(''));
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
