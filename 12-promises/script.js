const myPromise = new Promise((resolve, reject) => {
    resolve('success!')
    // reject('error!')
})

// myPromise
//     .then(successFuction)
//     .catch(error)

// myPromise.then(data => {
//     console.log(data)
// }, err => {
//     console.log(err)
// })

// myPromise
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// Chaining

myPromise
    .then(data => {
        console.log(data)
        return data
    })
    .then(dataFromAbove => {
        const newData = `${dataFromAbove} more!`
        console.log(newData)
        return newData
    })
    .then(fromPreviousThen => {
        const moreNewData = `${fromPreviousThen} even more!`
        console.log(moreNewData)
    })
    .catch(err => {
        console.log(err)
    })

const promiseData = new Promise((resolve, reject) => {

    console.log('getting data...')

    // pretend to get data...
    setTimeout(() => {
        resolve('Here is your data!')
    }, 2000)

})

promiseData
    .then(data => console.log(data))
    .catch(err => console.log(err))


/* 
1. Create a promise that sends back data
    - The data should be the number 1
    - Use setTimeout() to return the number 1 after 3 seconds
2. When the data is returned, multiply it by 2
3. After you multiply it by 2, add 3 to the number
4. Then write a string to the console that says `the data is now ${data}`
5. Lastly, if there is an error, catch it and console log an error message
*/