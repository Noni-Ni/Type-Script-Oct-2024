import { FoodAndBeverages } from './02.deliveries'

class Courier implements FoodAndBeverages.Delivery{
    protected  placesToVisit: {customerName: string , visited: boolean}[]

    constructor(placesToVisit: {customerName: string , visited: boolean}[]){
        this.placesToVisit = placesToVisit;
    }

    newCustomer(customerName: string, visited: boolean = false) : string{
        let match = this.placesToVisit.find(el => Object.keys(el)[0] === customerName)
        if(match){
            throw new Error(`${customerName} is already a customer of yours!`)
        }else{
            this.placesToVisit.push({ customerName, visited });
            return `${customerName} just became your client.`
        }
        
    }

    visitCustomer(customerName: string): any{
        const match = this.placesToVisit.find(customer => customer.customerName === customerName);
      
        if(!match){
            throw new Error(`${customerName} is not your customer`)
        }else{
            match.visited = true;
            
        }
    }

    showCustomers(): string {
        return this.placesToVisit
            .map(customer => `${customer.customerName} -> ${customer.visited}`)
            .join('\n');
    }
}

let courier = new Courier([{ customerName: 'DHL', visited: false }]);

courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');

courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');

console.log(courier.showCustomers());