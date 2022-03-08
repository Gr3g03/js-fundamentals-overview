/*
 Aight, logic gate time!
*/

// function called "getShorterString" takes 2 strings as arguments. It returns the string that is shorter in length.
// - If the strings are the same length, return "They're the same length!"
// 1. Build the function.
// 1.1 Call the function with "Bob" and "Steven" as arguments.
// 1.2. Call the function with "Henrica" and "Mark" as arguments.
// 1.3. Call the function with any arguments we like to test the remaining use case.

const firstString = "Bob"
const secondString = "Steven"

function getShorterString(firstString, secondString) {

    let lengthOFfirst = firstString.length


    let lengthOfSecond = secondString.length


    if (lengthOFfirst > lengthOfSecond) {
        return `${firstString} is longer`
    }

    if (lengthOfSecond > lengthOFfirst) {
        return `${secondString} is longer`
    }
    else {
        return "They're the same length!"
    }

}
getShorterString(firstString, secondString)


// 2. for this exercise, nasty birds are pigeon, seagull and bin chicken. All other birds are clean.
// Write a function called checkDirtyBirds which takes an array of bird species as an argument.
// The function should:
// - return "Eww" if the array contains one of the nasty birds
// - return "Oh god" if the array contains 2 of the nasty birds
// - return "Where the hell am I?" if the array contains 3 or more of the nasty birds
// - return "Birds are cute!" if all the birds are clean

const nasty = ['pigeon', 'seagull', 'chicken']

const birds = ['babbler', ' potoo', 'owl', 'sparrow']

function checkDirtyBirds(birds) {

    const checkDirtyBirds = nasty.filter(e => birds.includes(e))

    if (checkDirtyBirds.length = 1) {
        return "Eww"
    }

    if (checkDirtyBirds.length = 2) {
        return "Oh god"
    }

    if (checkDirtyBirds.length <= 3) {
        return "Where the hell am I?"
    }
    else {
        return "Birds are cute!"
    }


}


// 2.1 Test all the scenarios by calling the function with different arguments.