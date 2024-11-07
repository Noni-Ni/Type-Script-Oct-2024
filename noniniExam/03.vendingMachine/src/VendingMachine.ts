import { Drink } from "./Drink";

export class VendingMachine{

    buttonCapacity : number;
    drinks : Drink[];

    constructor( buttonCapacity : number){

        this.buttonCapacity = buttonCapacity;
        this.drinks = []
    }

    addDrink(drink: Drink) : void {
        if(this.drinks.length < this.buttonCapacity){
            this.drinks.push(drink);
        }
    }

    removeDrink(name: string) : boolean {
        let index: number = this.drinks.findIndex(el => el.name === name);
        if(index > -1){
            this.drinks.splice(index,1)
            return true;
        }else{
            return false;
        }
    }

    getLongest() : string {
        
        let sorted : Drink[] = this.drinks.slice().sort((a, b) => b.volume - a.volume)
        let drink : Drink = sorted[0]
        return drink.toString()

    }

    getCheapest() : string {

        let sorted : Drink[] = this.drinks.slice().sort((a, b) => a.price - b.price)
        let drink : Drink = sorted[0]
        return drink.toString()

    }

    buyDrink(name: string) : string {

        let drink :Drink = this.drinks.find(el => el.name === name);
        return drink.toString();

    }

    getCount() : number {

        return this.drinks.length;

    }

    report() : string{
        
        const report : string = this.drinks.map((el) => el.toString()).join("\n");

        return `Drinks available:\n${report}`;
    }
}