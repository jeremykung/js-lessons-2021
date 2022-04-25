/*

1. While Loops
2. For Loops
3. querySelector()
4. getElementByID()
5. innerText vs innerHTML
6. storing HTML elements in variables

*/

// While loop (continues while condition is true)

let counter = 0;

while (counter < 4) {
    // code
    console.log('hi');
    counter++;
}

// For loops (repeating x number of times)

for (i=0; i<5; i++) {
    console.log('bye');
}

// Don't use this anymore!
// document.write('hi');

// querySelector() grabs an element
document.querySelector("#t1score").innerText = 2
document.querySelector("#t2score").innerText = 3

// innerHTML allows you to write HTML
document.querySelector(".teamNames").innerHTML = "<p>Hsinchu Lioneers</p><p>Fubon Warriors</p>"
// += lets you add to your element instead of replacing it
document.querySelector(".teamNames").innerHTML += "<p>ABC</p><p>123</p>"

// getElementById() grabs only elements with ids
document.getElementById("t1score").innerText = 4

// you can store elements in variables
const t1Score = document.querySelector("#t1score")

t1Score.innerText = 6
t1Score.innerText = 10

// Example:
// for (i=0; i<3; i++) {
//     document.querySelector("#loop1").innerText = "hi"
// }