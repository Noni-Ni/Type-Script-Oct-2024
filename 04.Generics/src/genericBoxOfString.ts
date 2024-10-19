class Box<T> {
    data: T;
    constructor(el: T) {
        this.data = el

    }

    toString(): string {
        return `${this.data} is of type ${typeof (this.data)}`
    }
}

let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());