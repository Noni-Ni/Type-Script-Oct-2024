
type CalculatorType = {
    [key: string]: number;
};

function solve(firstNum: number, operator: string, secondNum : number) : string{
    const Calculator = {
        '+': firstNum + secondNum,
        '-': firstNum - secondNum,
        '/': firstNum / secondNum,
        '*': firstNum * secondNum

    }

    const result: number = Calculator[operator];
    return result.toFixed(2)
}

console.log(solve(5, '+', 10));
console.log(solve(25.5, '-', 3));
console.log(solve(9, '/', 2));
console.log(solve(7, '*', 5));