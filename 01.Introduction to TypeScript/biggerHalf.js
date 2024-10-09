function biggerHalf(arr) {
    arr.sort(function (a, b) { return a - b; });
    var halfNum = Math.floor(arr.length / 2);
    var result = arr.splice(halfNum);
    return result;
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
