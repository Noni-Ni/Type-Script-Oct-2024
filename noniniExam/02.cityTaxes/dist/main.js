function cityTaxes(name, population, treasury) {
    let town = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            Math.floor(this.treasury += this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            Math.floor(this.population += percentage / 100 * this.population);
        },
        applyRecession(percentage) {
            Math.floor(this.treasury -= percentage / 100 * this.treasury);
        }
    };
    return town;
}
/*const city =
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city);*/
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
