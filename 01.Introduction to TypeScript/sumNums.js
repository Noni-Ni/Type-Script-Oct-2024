function sumNums(n, m) {
    var sumNums = 0;
    var numN = Number(n);
    var numM = Number(m);
    var nums = [numN];
    var num = numN;
    while (num < numM) {
        num++;
        nums.push(num);
    }
    for (var index = 0; index < nums.length; index++) {
        sumNums = sumNums + nums[index];
    }
    return sumNums;
}
console.log(sumNums('1', '5'));
console.log(sumNums('-8', '20'));
