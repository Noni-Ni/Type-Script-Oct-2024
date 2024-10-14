class BankAccount {
    constructor() {
        this.id = BankAccount.nextId++;
        this.balance = 0;
    }
    getId() {
        return this.id;
    }
    //getBalance(): number {
    //   return this.balance;
    //}
    static setInterestRate(rate) {
        BankAccount.interestRate = rate;
    }
    getInterest(years) {
        return this.balance * BankAccount.interestRate * years;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
BankAccount.nextId = 1;
BankAccount.interestRate = 0.02;
class Bank {
    constructor() {
        this.accounts = new Map();
    }
    create() {
        const account = new BankAccount();
        this.accounts.set(account.getId(), account);
        console.log(`Account ID${account.getId()} created`);
    }
    deposit(id, amount) {
        const account = this.accounts.get(id);
        if (account) {
            account.deposit(amount);
            console.log(`Deposited ${amount} to ID${id}`);
        }
        else {
            console.log("Account does not exist");
        }
    }
    setInterest(rate) {
        BankAccount.setInterestRate(rate);
        //console.log(`Interest rate set to ${rate}`);
    }
    getInterest(id, years) {
        const account = this.accounts.get(id);
        if (account) {
            const interest = account.getInterest(years);
            console.log(`${interest.toFixed(2)}`);
        }
        else {
            console.log("Account does not exist");
        }
    }
    end() {
        this.accounts.clear();
    }
}
// Test client code example
//const bank = new Bank();
//bank.create();
//bank.deposit(1, 20);
//bank.getInterest(1, 10);
//bank.setInterest(0.015);
//bank.getInterest(1, 1);
const bank2 = new Bank();
bank2.create();
bank2.create();
bank2.deposit(1, 20);
bank2.deposit(3, 20);
bank2.deposit(2, 10);
bank2.setInterest(1.5);
bank2.getInterest(1, 1);
bank2.getInterest(2, 1);
bank2.getInterest(3, 1);
bank2.end();
bank2.deposit(3, 20);
//# sourceMappingURL=bankAccount.js.map