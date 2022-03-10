function buttonClick() {
    console.log('clicked!');
}

const pressKey = () => {
    console.log("key was pressed")
}

// All events emit an "event object", which we call "e"

const seeEvent = (e) => {
    console.log(e)
}

const checkA = (e) => {
    // console.log(e.key)
    if (e.key === "a") {
        console.log("A was pressed!")
    }
}

// Mouse events
document.querySelector("#click").addEventListener("mouseup", buttonClick)

document.addEventListener("mousemove", (event) => {
    console.log(event)
})

// Keyboard events
document.addEventListener("keypress", checkA)



// Anonymous functions

document.addEventListener("keyup", (e) => {
    if (e.key === "b") {
        console.log("b is pressed!")
    }
})

document.addEventListener("keyup", function(e) {
    if (e.key === "c") {
        console.log("c is pressed!")
    }
})