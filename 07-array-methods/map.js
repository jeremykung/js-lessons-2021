// MAP
// Map changes each element of the array

const nums = [8, 25, 34, 92, 7]

const doubleNums = nums.map((element) => {
    return element * 2
})

const tripleNums = nums.map(element => element * 3)

console.log(tripleNums)




const cafeMenu = [
    {
        name: 'coffee',
        price: 80,
        drink: true
    },
    {
        name: 'milk tea',
        price: 60,
        drink: true
    },
    {
        name: 'sandwich',
        price: 100,
        drink: false
    },
    {
        name: 'cake',
        price: 120,
        drink: false
    }
]

// Create a half off menu

const saleMenu = cafeMenu.map((menuItem) => {
    return {
        name: menuItem.name,
        price: menuItem.price / 2,
        drink: menuItem.drink
    }
})

console.log(saleMenu)

// Create 20% off drinks only (drinkSaleMenu)

const drinkSaleMenu = cafeMenu.map((menuItem) => {
    if (menuItem.drink === true) {
        return {
            name: menuItem.name,
            price: menuItem.price * 0.8,
            drink: menuItem.drink
        }
    } else {
        return {
            name: menuItem.name,
            price: menuItem.price,
            drink: menuItem.drink
        }
    }
})

console.log('drink sale:', drinkSaleMenu)