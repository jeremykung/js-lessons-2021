const nums = [12, 3, 48, 89, 31, 7, 65]

const singleNums = nums.reduce((accumulator, element) => {
    console.log(element.length)
    if (element.length === 1) {
        accumulator++
    }
    return accumulator
}, 0)

console.log(singleNums)