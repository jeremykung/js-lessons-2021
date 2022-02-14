// FILTER
// Filters an array where something is true

const nums = [8, 25, 34, 92, 7]

const lowNums = nums.filter((element) => {
    return element < 30 // false
})

console.log(lowNums)

const highNums = nums.filter(num => num > 30)

console.log(highNums)

const animals = [
    {
        name: 'snake',
        dangerLevel: 10
    },
    {
        name: 'cat',
        dangerLevel: 1
    },
    {
        name: 'dog',
        dangerLevel: 2
    },
    {
        name: 'crocodile',
        dangerLevel: 10
    }
]

// Create a safe animals and dangerous animals array

const safeAnimals = animals.filter((animal) => {
    return animal.dangerLevel < 5
})

const dangerousAnimals = animals.filter((animal) => {
    return animal.dangerLevel > 5
})

console.log(dangerousAnimals)

// Create an array with shortAnimalNames
// Return animals who have 3 letters in their name
// Return animals who have 5 letters in their name

const shortAnimalNames = animals.filter((animal) => {
    return animal.name.length === 3
})

console.log(shortAnimalNames)

const mediumAnimalNames = animals.filter((animal) => {
    return animal.name.length === 5
})

console.log(mediumAnimalNames)