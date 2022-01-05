//Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName = '', 
    lastName = '', 
    incomes = [], 
    expenses = [],
    totalIncome = function(){
        let soma = '';
        for(let i = 0; i < incomes.length; i ++) {
            soma += incomes[i];
        }
        return soma;
    },
    totalExpense = function() {
        let soma = '';
        for(let i = 0; i < expenses.length; i ++) {
            soma += incomes[i];
        }
        return soma;
    },
    accountInfo = function() {
        return `${this.firstName} ${this.lastName}'s account has ${this.totalIncome} and ${this.totalExpense}`
    },
    addIncome = function(n) {
        incomes.push(n);
    },
    addExpense = function(n) {
        expenses.push(n);
    },
    accountBalance = function() {
        return this.totalIncome - this.totalExpense;
    }
}


/* --------------------------------------------------------------------- */
