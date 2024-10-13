class Person{
    name: string;
    age: number;
    constructor(n:string, a: number){
        this.name = n;
        this.age = a;
    }
    printDetails(){
        console.log(`${this.name} is ${this.age} years old.`)
    }
}
function testPerson(data: string){
    let [name, age] = data.split(' ')
    let createdPerson = new Person(name, Number(age))
    return createdPerson.printDetails()
}

testPerson('Peter 12')
testPerson('Sofia 33')