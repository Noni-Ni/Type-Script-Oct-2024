"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        let index = this.drinks.findIndex(el => el.name === name);
        if (index > -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    getLongest() {
        let sorted = this.drinks.slice().sort((a, b) => b.volume - a.volume);
        let drink = sorted[0];
        return drink.toString();
    }
    getCheapest() {
        let sorted = this.drinks.slice().sort((a, b) => a.price - b.price);
        let drink = sorted[0];
        return drink.toString();
    }
    buyDrink(name) {
        let drink = this.drinks.find(el => el.name === name);
        return drink.toString();
    }
    getCount() {
        return this.drinks.length;
    }
    report() {
        const report = this.drinks.map((el) => el.toString()).join("\n");
        return `Drinks available:\n${report}`;
    }
}
exports.VendingMachine = VendingMachine;
