// Callbacks are a function in a function

function sayHi(callback) {
    console.log("Hi " + callback)
}

function name() {
    const getName = prompt("Your name is...")
    return getName
}

// 1. Create a function that minuses 2 numbers
// 2. Create a function that multiplies by two. 
// The multiply function should accept a callback as an argument

function minus(num1, num2) {
    return num1-num2
}

function multiplyByTwo(callback) {
    return callback * 2
}


















// function sayHi(callbackFunction) {
//     console.log('Hi there ' + callbackFunction)
// }

// function getName() {
//     const name = prompt("What's your name?")
//     return name
// }

// function writeToConsole(callback) {
//     console.log(callback)
// }

// function answerTimesTwo(previousMath) {
//     const answer = 2 * previousMath
//     return answer
// }

// function answerPlusOne(previousMath) {
//     const answer = 1 + previousMath
//     return answer
// }

// function minus(num1, num2) {
//     return num1 - num2
// }