//Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname;
        this.lastname = lastname;
        this._incomes = incomes;
        this._expenses = expenses;
    }

    set incomes(valor) {
        this._incomes += valor;
    }

    set expenses(valor) {
        this._expenses += valor;
    }

    get incomes() {
        return this._incomes;
    }

    get expenses() {
        return this._expenses;
    }

    totalIncome() {
        return this._incomes;
    }

    totalExpense() {
        return this._expenses;
    }

    addIncome(valor) {
        this._incomes += valor;
        return this._incomes;
    }

    addExpense(valor) {
        this._expenses += valor;
        return this._expenses;
    }

    accountBalance() {
        const balance = this._incomes - this._expenses;
        return balance;
    }

    accountInfo() {
        return console.log(`The ${this.firstname} ${this.lastname} account' has the total income which is ${this.totalIncome()} and the expenses are ${this.totalExpense()}`);
    }
    
}