function mathOperation(a: number, b: number, c: string):any{
    let operations: string[] = ['+', '-', '*', '/', '%', '**'];
    if(c == '+'){
        return a + b
    }else if( c == '-'){
        return a - b
    }else if( c == '*'){
        return a * b
    }else if( c == '/'){
        return a / b
    }else if( c == '%'){
        return a % b
    }else if( c == '**'){
        return a ** b
    }
}

console.log(mathOperation(5, 6, '+'))
console.log(mathOperation(3, 5.5, '*'))