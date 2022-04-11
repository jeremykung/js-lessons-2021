// Fetch w/ Promises

    // syntax
// fetch('https://api.coingecko.com/api/v3/exchanges')
//     .then(response => {
//         return response.json()
//     })
//     .then(jsonData => {
//         console.log(jsonData)
//         document.write(jsonData[0].name)
//         // create a div in html
//         // write the name, country, and year for one of the exchanges in the div
//     })
//     .catch(err => {
//         console.log(err)
//     })

// const promiseData = () => {
//     fetch('https://api.coingecko.com/api/v3/exchanges')
//         .then(response => {
//             return response.json()
//         })
//         .then(data => {
//             console.log(data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// //     // shorthand
// const promiseData = () => {
//     fetch('https://api.coingecko.com/api/v3/exchanges')
//         .then(response => response.json())  // auto returns
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }

// recreate the fetch() function you made, and this time, store it in a variable (saved function), that you can call.
// use shorthand if you can

// Fetch w/ Async Await

    // create async fn
const getData = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/exchanges')
        const data = await response.json()
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}

//     // call async fn
// // getData()


//     // saving data
let myData

async function fetchDataAndSave() {

    const response = await fetch("https://api.coingecko.com/api/v3/exchanges")
    
    const jsonData = await response.json()
    
    myData = await jsonData

}

// async function fetchDataAndSave() {
//     const response = await fetch("https://api.coingecko.com/api/v3/coins/list")
//     const jsonData = await response.json()
//     myData = await jsonData
// }

function promiseDataAndSave() {
    fetch("https://api.coingecko.com/api/v3/coins/list")
        .then(response => {
            return response.json()
        })
        .then(jsonData => {
            myData = jsonData
        })
}

// function promiseDataAndSave() {
//     fetch("https://api.coingecko.com/api/v3/coins/list")
//         .then(response => response.json())
//         .then(jsonData => myData = jsonData)
// }

// // fetchData()