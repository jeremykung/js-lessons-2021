// fetch("https://api.coingecko.com/api/v3/coins/list")
//     .then(res => console.log('resolved', res))
//     .catch(err => console.log('rejected', err))

const getData = async (api) => {
    const res = await fetch(api)
    const data = await res.json()
    return data
}

// getData("https://api.coingecko.com/api/v3/coins/list")
//     .then(data => data)

const storeData = async () => {
    const data = await getData("https://api.coingecko.com/api/v3/coins/list")
    console.log(data[1647])
    document.write(data[1654].id)
}

storeData()

// WORKING EXAMPLE

fetch("https://api.coingecko.com/api/v3/exchanges")
    // .then(response => response.json())
    .then(response => console.log(response))
    // .then(data => console.log(data))
    .catch(err => console.log(err))

// fetch('https://api.coingecko.com/api/v3/exchanges')
//   .then(response => response.json())
//   .then(data => console.log(data));