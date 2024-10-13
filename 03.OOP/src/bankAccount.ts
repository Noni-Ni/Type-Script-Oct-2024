class BankAccount {
    private id: number = 0;
    private balance: number = 0;
    private interestRate: number = 0.02;
    

    constructor() {
        this.id +=1
        this.balance = 0;
        this.interestRate = 0.02;
    }

    set setInterestRate(interestR: number) {
        this.interestRate = interestR;
    }

    get getInterest(): number {
        return this.interestRate;
    }

    deposit(id: number, amount: number) {
        this.balance += amount;
        console.log(`Deposited ${amount} to ID${id}`)
    }
}


