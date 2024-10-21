import { Greeter } from "./01.greeter";

class Person<T> implements Greeter.Greeting<T>{
    private name:string;
    private age: number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    introduction(): string{
        return `My name is ${this.name} and I am ${this.age} years old.`
    }

    sayGoodbye(name: T){
        return `Dear ${name}, it was a pleasure meeting you!`
    }
}

let p = new Person('Ivan Ivanov', 25);

console.log(p.introduction());
console.log(p.sayGoodbye('Petar Petrov'));