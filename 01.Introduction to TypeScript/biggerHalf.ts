function biggerHalf(arr: number[]): number[]{
    arr.sort((a, b) => a - b)
    let halfNum: number = Math.floor(arr.length/2)
    let result: number[] = arr.splice(halfNum)
    return result;
}

console.log(biggerHalf([4, 7, 2, 5]))
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))