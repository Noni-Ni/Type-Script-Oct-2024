function solve(startNum, endNum) {
    let numbers = [];
    let sum = 0;
    while (startNum <= endNum) {
        numbers.push(startNum);
        sum += startNum;
        startNum++;
    }
    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}
solve(5, 10);
solve(0, 26);
solve(50, 60);
