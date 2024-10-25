function solve(firstNum, operator, secondNum) {
    const Calculator = {
        '+': firstNum + secondNum,
        '-': firstNum - secondNum,
        '/': firstNum / secondNum,
        '*': firstNum * secondNum
    };
    const result = Calculator[operator];
    return result.toFixed(2);
}
console.log(solve(5, '+', 10));
console.log(solve(25.5, '-', 3));
console.log(solve(9, '/', 2));
console.log(solve(7, '*', 5));
