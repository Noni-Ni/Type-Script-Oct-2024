class BankAccount {
    private static nextId: number = 1;
    private static interestRate: number = 0.02;
    
    private id: number;
    private balance: number;

    constructor() {
        this.id = BankAccount.nextId++;
        this.balance = 0;
    }

    getId(): number {
        return this.id;
    }

    //getBalance(): number {
     //   return this.balance;
    //}

    static setInterestRate(rate: number): void {
        BankAccount.interestRate = rate;
    }

    getInterest(years: number): number {
        return this.balance*BankAccount.interestRate*years
    }

    deposit(amount: number): void {
        this.balance += amount;
    }
}

class Bank {
    private accounts: Map<number, BankAccount> = new Map<number, BankAccount>();

    create(): void {
        const account = new BankAccount();
        this.accounts.set(account.getId(), account);
        console.log(`Account ID${account.getId()} created`);
    }

    deposit(id: number, amount: number): void {
        const account = this.accounts.get(id);
        if (account) {
            account.deposit(amount);
            console.log(`Deposited ${amount} to ID${id}`);
        } else {
            console.log("Account does not exist");
        }
    }

    setInterest(rate: number): void {
        BankAccount.setInterestRate(rate);
        //console.log(`Interest rate set to ${rate}`);
    }

    getInterest(id: number, years: number): void {
        const account = this.accounts.get(id);
        if (account) {
            const interest = account.getInterest(years);
            console.log(`${interest.toFixed(2)}`);
        } else {
            console.log("Account does not exist");
        }
    }

    end():void{
        this.accounts.clear()
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


