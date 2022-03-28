/*

1. What is JSON?
2. Built in JSON object
    - Stringify
    - Parse
3. Challenge

*/

const students = {
    student1: {
        name: "Sam",
        age: 16
    },
    student2: {
        name: "Livia",
        age: 19
    }
}

// Convert to JSON
const jsonStudents = JSON.stringify(students)
// Let's see what we get...
console.log(jsonStudents)

// Convert to JavaScript Object
const objectStudents = JSON.parse(jsonStudents)