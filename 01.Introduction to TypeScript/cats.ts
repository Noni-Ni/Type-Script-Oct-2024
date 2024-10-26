function cats(arr: string[]): void {

    class Cat {
        name: string
        age: number
        constructor(name: string, age: number){
            this.name = name,
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`) 
        }
    }

    for (let index = 0; index < arr.length; index++) {
        let element: string = arr[index];
        let arrEl = element.split(' ');
        let cat1 = new Cat(arrEl[0], Number(arrEl[1]))
        cat1.meow()

        
    }
}

cats(['Mellow 2', 'Tom 5'])
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])