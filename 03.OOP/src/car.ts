
class Car {
    brand: string;
    model: string;
    horsePower: number;
    constructor( b:string, m: string, h: number){
        this.brand = b;
        this.model = m;
        this.horsePower = h;

    }
    printCar(): void{
        console.log(`The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`)
    }
    get getBrand(): string{
        return this.brand;
    }
    set setBrand(newBrand:string){
        this.brand = newBrand;
    }
    get getModel(): string{
        return this.model;
    }
    set setModel(newModel:string){
        this.model = newModel;
    }
    get getHorsePower(): string{
        return this.brand;
    }
    set setHorsePower(newHorsePower:number){
        this.horsePower = newHorsePower;
    }
}

function testCar(data: string){
    let [brand, model, horsePower] = data.split(' ')
    let createdCar = new Car(brand,model,Number(horsePower))
    return createdCar.printCar()
}

testCar('Chevrolet Impala 390')
testCar('Skoda Karoq 150')