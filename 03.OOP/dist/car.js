class Car {
    constructor(b, m, h) {
        this.brand = b;
        this.model = m;
        this.horsePower = h;
    }
    printCar() {
        console.log(`The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`);
    }
    get getBrand() {
        return this.brand;
    }
    set setBrand(newBrand) {
        this.brand = newBrand;
    }
    get getModel() {
        return this.model;
    }
    set setModel(newModel) {
        this.model = newModel;
    }
    get getHorsePower() {
        return this.brand;
    }
    set setHorsePower(newHorsePower) {
        this.horsePower = newHorsePower;
    }
}
function testCar(data) {
    let [brand, model, horsePower] = data.split(' ');
    let createdCar = new Car(brand, model, Number(horsePower));
    return createdCar.printCar();
}
testCar('Chevrolet Impala 390');
testCar('Skoda Karoq 150');
//# sourceMappingURL=car.js.map