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


// setInterval()

const repeatHiClass = setInterval(hiClass, 1000)

setInterval(() => {
    console.log('hello')
}, 2000)