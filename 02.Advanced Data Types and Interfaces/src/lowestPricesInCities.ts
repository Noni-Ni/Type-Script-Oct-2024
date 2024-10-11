function lowestPrice(data: string[]) {
    let products = []
    interface Product {
        nameP: string;
        town: string;
        price: number;
    }
    data.map(el => {
        let [town, productName, price] = el.split(' | ');
        let product: Product = {
            nameP: productName,
            town: town,
            price: Number(price)
        }
        let match: Product = products.find(({ nameP }) => nameP === productName)
        let index: number = products.findIndex(({ nameP }) => nameP === productName)
        if (match !== undefined) {
            if (Number(match[price]) > product[price]) {
                products[index][town] = town
                products[index][price] = price
            }
        } else {
            products.push(product)
        }





    })
    for (let index = 0; index < products.length; index++) {
        let el: Product= products[index]
        console.log(`${el.nameP} -> ${el.price} (${el.town})`);
    }
}

lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])