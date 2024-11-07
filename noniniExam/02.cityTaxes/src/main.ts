type TownType = {
    name : string;
    population : number;
    treasury : number;
    taxRate : number;
    collectTaxes()  : void;
    applyGrowth(percentage : number) : void;
    applyRecession(percentage : number) : void;
}

function cityTaxes( name : string, population : number, treasury : number){
    let town : TownType = {
        name : name,
        population: population,
        treasury : treasury,
        taxRate : 10,

        collectTaxes(): void {

             Math.floor(this.treasury += this.population * this.taxRate);
        },
    
        applyGrowth(percentage) : void { 

            Math.floor(this.population += percentage/100 * this.population);
    
        },
    
        applyRecession(percentage) : void {

            Math.floor(this.treasury -= percentage/100 * this.treasury);
        }
    }

    return town;
    
}

/*const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);*/

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);