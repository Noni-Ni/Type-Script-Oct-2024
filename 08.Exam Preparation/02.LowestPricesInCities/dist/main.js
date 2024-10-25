function solve(data) {
    let lowestPrice = {};
    data.forEach(el => {
        let [town, product, price] = el.split(' | ');
        let currPrice = Number(price);
        if (!lowestPrice[product]) {
            lowestPrice[product] = { town: town, price: currPrice };
        }
        else {
            if (lowestPrice[product][price] > currPrice) {
                lowestPrice[product][price] = currPrice;
                lowestPrice[product][town] = town;
            }
        }
    });
    Object.keys(lowestPrice).forEach(el => {
        console.log(`${el} -> ${lowestPrice[el].price} (${lowestPrice[el].town})`);
    });
}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
