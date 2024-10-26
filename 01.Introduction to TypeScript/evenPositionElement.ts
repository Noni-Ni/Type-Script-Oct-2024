function even(elements: string[]): string{
    let evenStrArr: string[] = [];

    for (let index = 0; index < elements.length; index++) {
        if(index % 2 == 0){
            
            evenStrArr.push(elements[index])
        }
    }
    let evenStr: string = evenStrArr.join(' ');
    return evenStr.trim()
}

console.log(even(['20', '30', '40', '50', '60']))
console.log(even(['5', '10']))