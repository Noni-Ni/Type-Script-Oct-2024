function mathOperation(a: number, b: number, c: string): number {
    let result = 0;
    if(c == '+'){
        result =  a + b
    }else if( c == '-'){
        result =  a - b
    }else if( c == '*'){
        result =  a * b
    }else if( c == '/'){
        result =  a / b
    }else if( c == '%'){
        result =  a % b
    }else if( c == '**'){
        result =  a ** b
    }
    return result;
}

console.log(mathOperation(5, 6, '+'))
console.log(mathOperation(3, 5.5, '*'))