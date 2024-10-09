function mathOperation(a, b, c) {
    var operations = ['+', '-', '*', '/', '%', '**'];
    if (c == '+') {
        return a + b;
    }
    else if (c == '-') {
        return a - b;
    }
    else if (c == '*') {
        return a * b;
    }
    else if (c == '/') {
        return a / b;
    }
    else if (c == '%') {
        return a % b;
    }
    else if (c == '**') {
        return Math.pow(a, b);
    }
}
console.log(mathOperation(5, 6, '+'));
console.log(mathOperation(3, 5.5, '*'));
