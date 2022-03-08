/*
 How well you understand functions in javascript, bruh?
*/

// 1. create a function called "getMyName" that returns your name. It takes no arguments.

function getMyName() {
    const name = 'Grigori'
    return name
}

// 2. Create a function called "add". It takes 2 numbers as arguments and returns its sum.

function add(a, b) {
    return a + b
}

// 3. Create a function called "subtractWithCheck". This time:
//  - It can expect any 2 arguments
//  - It should return the difference of the 2 arguments if they are numbers
//  - If one of the arguments is not a number, it should return "Yo dawg you can't subtract us!"

function subtractWithCheck(a, b) {
    if (a !== Number(a) || b !== Number(b)) {
        return "Yo dawg you can't subtract us!"
    } else {
        return a - b
    }
}


// 4. now call the functions with some arguments of your choice.
// 4.1 assign results to variables.
// 4.2 print the results to the console.
const sum1 = subtractWithCheck(8, 5)
const sum2 = subtractWithCheck('ss', 5)
console.log(sum1, sum2)



// 5. Create a function called getAge. It takes a person object as an argument.
//   - It should return the person's name and age as one single string, like "John is 26".
//   - The person's shape is { id: number, bornIn: number, name: string }
// 5.1 Call the function with a person argument of your choosing.

const person = {
    id: 1,
    name: 'Grigori',
    age: 23,
    bornIn: 1999
}

function getAge(person) {
    return `${person.name} is ${person.age} `

}

// 6. Yo, this is a brain picker. Move on for now if you can't solve it ;P
// Create a function called "getGreet" that takes a boolean (you can call it `shouldCapitalise`) and:
//   - returns a function that greets the person with the given string.
//   - if `shouldCapitalise` is true, it should greet the person with a capitalised name.
// 6.1 Using this new function, say hello to yourself in uppercase, and console.log it

let shouldCapitalise = true

function getGreet(shouldCapitalise, person) {
    if (shouldCapitalise) {
        return person.name.toUpperCase()
    } else {
        return 'maybe your name is ugly thats why it doesnt work'
    }

}
