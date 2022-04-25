/*

Includes & Find
- By Livia Tseng

Create an array with 7 random friends
- include their gender, age, and MBTI
- From your female friends, find the first one that is 18yrs old.
- From your male friends, see that if your array incudes a person whose MBTI is ENFP

1st digit: E I
2nd digit: N S
3rd digit: F T
4th digit: J P


// includes()


The includes() method determines whether an array includes a certain value among its entries,

returning true or false as appropriate.

array.includes(element, start/fromIndex)
return true or false

element -> the value that you are searching for
start/fromIndex -> (optional) the position to begin searching for element

if fromIndex is greater than the length of the array, the array will not be searched
-> returned false

if fromIndex is less than or equals to zero, the entire array will be searched

*/

// example:

const animals = ["cat", "dog", "rabbit", "sheep"]

animals.includes("cat", 3)
//expected output: false

animals.includes("cat", -1)
//expected output: false

animals.includes("cat", -4)
//expected output: true

animals.includes("dog", 0)
//expected output: true


// find()

/*
The find() method returns the first element in the provided array that satisfies the
provided testing function. If no values satisfy the testing function, undefined is
returned.


*/

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 25},
    {name: 'cherries', quantity: 15}
    ];
    
    function isCherries(fruit) {
    return fruit.name === 'cherries';
    }
    
    console.log(inventory.find(isCherries));

    // you can replace the function with this

    console.log(inventory.find((object)=>{

        return object.name == "cherries" && object.quantity == 15

    }));

/*

Create an array with 7 random friends
- include their gender, age, and MBTI
- From your female friends, find the first one that is 18yrs old.
- From your male friends, see that if your array incudes a person whose MBTI is ENFP

1st digit: E I
2nd digit: N S
3rd digit: F T
4th digit: J P

*/

// Solution:

const friends = [
    {gender: "male", age: 31, mbti: "ENFJ"},
    {gender: "female", age: 25, mbti: "INTP"},
    {gender: "male", age: 32, mbti: "INFJ"},
    {gender: "female", age: 18, mbti: "ESFJ"},
    {gender: "male", age: 35, mbti: "ESTP"},
    {gender: "male", age: 28, mbti: "ISFP"},
    {gender: "male", age: 30, mbti: "INTJ"},
]

console.log(friends.find((object)=>{
    return object.gender == "female" && object.age == 18
}));

console.log(friends.includes((object)=>{
    return object.gender == "male" && object.mbti == "ENFP"
}));