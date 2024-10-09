function sumNums(n : string, m: string): number{

    let sumNums: number  = 0; 
    let numN: number = Number(n);
    let numM: number = Number(m);
    let nums: number[] = [numN];
    let num: number = numN;
    while(num < numM){
        num++
        nums.push(num)
    }
    for (let index = 0; index < nums.length; index++) {
        sumNums = sumNums + nums[index]
        
    }
    return sumNums;
}

console.log(sumNums('1', '5'));
console.log(sumNums('-8', '20'));