function findLargestNumber(num1 : number, num2: number, num3: number): string{

    let values: number[] = [num1, num2, num3].sort((a, b) => a - b);
    let largestNum: number = values[2]
    
    return `The largest number is ${largestNum}.`
}

console.log(findLargestNumber(5, -3, 16));
console.log(findLargestNumber(-3, -5, -22.5));