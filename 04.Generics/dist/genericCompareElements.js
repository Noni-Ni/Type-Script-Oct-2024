class CompareElements {
    data;
    constructor(elements) {
        this.data = elements;
    }
    compare(comparator) {
        let times = 0;
        for (const element of this.data) {
            if (element === comparator) {
                times++;
            }
        }
        return times;
    }
}
//let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
//console.log(c.compare('b'));
let d = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(d.compare(1));
