const student1 = {
    // Properties
    name: "Nico",
    age: 15,
    hobby: "Playing Video Games",

    // Methods (functions that are in an object)
    doHobby: function() {
        console.log("Nico is playing games")
    },
    action: function() {
        console.log("Nico is sleeping")
    },
    // Regular Functions bind the "this" keyword
    getName: function() {
        console.log(this.name)
    },
    // Arrow Functions do NOT bind "this"
    getNameArrow: () => {
        console.log(this.name)
    }
    // aboutStudent: function() {
    //     console.log(`${this.name} is a ${this.age} year old boy who likes to ${this.hobby}`)
    // }
}