class Animal {
    constructor() {
    }
    eat() {
        console.log("eating…");
    }
}
class Dog extends Animal {
    constructor() {
        super();
    }
    bark() {
        console.log('barking...');
    }
}
class Cat extends Animal {
    constructor() {
        super();
    }
    meow() {
        console.log('meowing…');
    }
}
let suziCat = new Cat();
suziCat.eat();
suziCat.meow();
let bekiDog = new Dog();
bekiDog.bark();
bekiDog.eat();
let jivot = new Animal();
jivot.eat();
//# sourceMappingURL=hierarchicalInheritance.js.map