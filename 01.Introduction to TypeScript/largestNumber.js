function findLargestNumber(num1, num2, num3) {
    var values = [num1, num2, num3].sort(function (a, b) { return a - b; });
    var largestNum = values[2];
    return "The largest number is ".concat(largestNum, ".");
}
console.log(findLargestNumber(5, -3, 16));
console.log(findLargestNumber(-3, -5, -22.5));
