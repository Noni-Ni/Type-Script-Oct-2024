class BankAccount {
    constructor() {
        this.balance = 0;
        this.interestRate = 0.02;
        this.id += 1;
        BankAccount.idCounter += 1;
        this.balance = 0;
        this.interestRate = 0.02;
    }
    set setInterestRate(interestR) {
        this.interestRate = interestR;
    }
    get getInterest() {
        return this.interestRate;
    }
    deposit(id, amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} to ID${id}`);
    }
}
let clients = [];
function testClient(data) {
    let params = data.split(' ');
    let command = params[0];
    let id = 0;
    let amount = 0;
    let interest = 0;
    let years = 0;
    if (command === 'Create') {
        let newAccount = new BankAccount();
        clients.push(newAccount);
        console.log(`Account ID${BankAccount.idCounter} created`);
    }
    else if (command === 'Deposit') {
        id = Number(params[1]);
        amount = Number(params[2]);
        for (let index = 0; index < clients.length; index++) {
            if (id === clients[index].id) {
                clients[index].deposit(id, amount);
            }
        }
    }
    else if (command === 'SetInterest') {
        clients[0]?.setInterestRate(Number(params[1]));
    }
    else if (command === 'GetInterest') {
        id = Number(params[1]);
        years = Number(params[2]);
        for (let index = 0; index < clients.length; index++) {
        }
    }
}
testClient('Create');
testClient('Deposit 1 20');
testClient('GetInterest 1 10');
//# sourceMappingURL=bankAccount.js.map