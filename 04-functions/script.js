/*

1. traditional functions
2. arrow functions
3. paramters and arguments
4. return values
5. buttons onClick()
6. setInterval()
    - storing in variables for clearInterval()

*/

// TRADITIONAL FUNCTIONS

// Declaration -> defining what the function does
function welcomeClass() {
    console.log('hi Livia')
    console.log('hi Jackson')
    console.log('hi Nico')
}

// Call -> runs the function
// welcomeClass()


// ARROW FUNCTIONS

// Declaration
const hiClass = () => {
    console.log('hi Livia')
    console.log('hi Jackson')
    console.log('hi Nico')
}

// Calling is the same
// hiClass()


// PARAMETERS and ARGUMENTS

// Parameters are what we put as placeholders
const addNumbers = (num1, num2) => {
    const answer = num1 + num2
    return answer
}

// Arguments are the values we give to the placeholder
addNumbers(2, 7)

const liviaQuestion = addNumbers(8, 1)


// buttons using onClick

const multiply = () => {
    const num1 = prompt('what is number 1?')
    const num2 = prompt('what is number 2?')
    const answer = num1 * num2
    console.log(answer)
}


// setInterval(function, delay)
// repeats a function every 'delay' milliseconds

// This function calls the 'hiClass()' function every 1 second
setInterval(hiClass, 1000)

// To stop a setInterval(), we need to store it in a variable
const repeatHiClass = setInterval(hiClass, 1000)

// We then use the clearInterval(intervalName) function to stop it
clearInterval(repeatHiClass) // this stops repeatHiClass


// Sometimes people define the function in the argument itself
// We call these "Anonymous Functions" be cause they don't have a name
setInterval(() => {
    console.log('hello')
}, 2000)