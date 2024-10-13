class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    printDetails() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
function testPerson(data) {
    let [name, age] = data.split(' ');
    let createdPerson = new Person(name, Number(age));
    return createdPerson.printDetails();
}
testPerson('Peter 12');
testPerson('Sofia 33');
//# sourceMappingURL=opinionPoll.js.map