/**
 * Finally, we will test your wit and angineering mindset.
 */

// You have a bunch of bank accounts:
// Bank of America, with 500 EUR,
// Bank of Tirana, with 1000 EUR,
// Bank of England, with 69 EUR,
// HSBC with 100 EUR,
// Bank of Italy with 200 EUR.

// You want to keep track of your money. To do that:
// 1. Store all the information in the most appropriate JS data structure you can think of.
// Note: You may want to add a unique identifier to each account.

//create user and banks tables 
let accounts = [{
    id: 1,
    name: "Bank of America",
    amount: 500
},
{
    id: 2,
    name: "Bank of Tirana",
    amount: 1000
},
{
    id: 3,
    name: "Bank of England",
    amount: 69
},
{
    id: 4,
    name: "HSBC",
    amount: 100
},
{
    id: 5,
    name: "Bank of Italy",
    amount: 200
},
]

// Now, without directly typing the data:
// 2. Find a way to find out how much money is in a selected account.
function getBank(bank) {
    return accounts.find(account => account.name === bank.name).amount
}

// 3. Find a way to find out how much money you have in total.
function total() {
    let total = 0
    for (const account of accounts) {
        total += account.amount
    }
    return total
}
// 4. Find a way to add money to a selected account.

function addMoney(bank, amount) {
    return accounts.find(account => account.name = bank).amount += amount

}
// 4.1 And subtract too.
function addMoney(bank, amount) {
    return accounts.find(account => account.name = bank).amount -= amount

}
// 5. Each bank account has an account number. For this exercise, an account number is a 5 digit integer.
// Find a way to add that information into the existing shape.
