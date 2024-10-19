class CarDealership {
    modelsSold = {};
    soldCars = 0;
    dealershipName;
    constructor(deName) {
        this.dealershipName = deName;
    }
    sellCar(dealerID, model) {
        this.modelsSold[String(dealerID)] = model;
        this.soldCars++;
    }
    showDetails() {
        let result = ``;
        result += this.dealershipName + '\n';
        for (const element of Object.keys(this.modelsSold)) {
            result += `${element} sold ${this.modelsSold[element]}` + '\n';
        }
        return result;
    }
}
let dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
