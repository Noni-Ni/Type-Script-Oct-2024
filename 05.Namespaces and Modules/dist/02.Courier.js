"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Courier {
    placesToVisit;
    constructor(placesToVisit) {
        this.placesToVisit = placesToVisit;
    }
    newCustomer(customerName, visited = false) {
        let match = this.placesToVisit.find(el => el.customerName === customerName);
        if (match) {
            throw new Error(`${customerName} is already a customer of yours!`);
        }
        else {
            this.placesToVisit.push({ customerName, visited });
            return `${customerName} just became your client.`;
        }
    }
    visitCustomer(customerName) {
        const match = this.placesToVisit.find(customer => customer.customerName === customerName);
        if (!match) {
            throw new Error(`${customerName} is not your customer`);
        }
        else {
            match.visited = true;
        }
    }
    showCustomers() {
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
