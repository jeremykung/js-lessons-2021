// Class declaration

class Dog {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const dog1 = new Dog("spot", 5)
const dog2 = new Dog("sally", 2)
const dog3 = new Dog("bobby", 3)


// Class with default methods

class Person {
    constructor(height, age, weight, name) {
        this.height = height
        this.age = age
        this.weight = weight
        this.name = name
    }
    getName() {
        console.log("This person's name is " + this.name)
    }
}

const person1 = new Person(183, 19, 80, "Jackson")
const person2 = new Person(165, 15, 50, "Nico")

// Extends

class Boyfriend extends Person {
    constructor(height, age, weight, name, personality) {
        super(height, age, weight, name)
        this.personality = personality // new property
    }
    goOnDate() {
        console.log(`${this.name} took you out to the shopping mall!`)
    }
}

const sam = new Boyfriend(180, 19, 75, "Sam", "humorous")
const johnny = new Boyfriend(180, 20, 75, "Johnny", "patient")







// const dog1 = {
//     name: "spot",
//     age: 5,

//     jump() {
//         console.log(this.name + " jumped")
//     },
//     sit() {
//         console.log(this.name + " is sitting")
//     }

// }

// const dog2 = {
//     name: "woody",
//     age: 2,

//     jump() {
//         console.log(this.name + " jumped")
//     },
//     sit() {
//         console.log(this.name + " is sitting")
//     }

// }

// const dog3 = {
//     name: "sandy",
//     age: 8,

//     jump() {
//         console.log(this.name + " jumped")
//     },
//     sit() {
//         console.log(this.name + " is sitting")
//     }

// }