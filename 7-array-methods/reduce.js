// REDUCE
// Code by Nico Liao

//No Initial Value
const arr = [1, 2, 3, 4, 5];
const reduceArr = arr.reduce((accumulator, currentValue) => {
    console.log(accumulator + " " + currentValue);
    return accumulator + currentValue
});

//With Initial Value
const arr = [1, 2, 3, 4, 5];
const reduceArr = arr.reduce((accumulator, currentValue) => {  
    console.log(accumulator + " " + currentValue);
    return accumulator + currentValue
}, 0);

//Combine, Flatten Array
const arr = [['a', 'b'], ['c', 'd'], ['e', 'f']];
const reduceArr = arr.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);
console.log(reduceArr);

//Counting instances of values in an object
const arr = ['a', 'a', 'b', 'c', 'c', 'c', 'e'];
const reduceArr = arr.reduce((accumulator, currentValue) => {
if(accumulator[currentValue]) {
    accumulator[currentValue] ++;
  } else {
    accumulator[currentValue] = 1;
  }
return accumulator;
}, {});
console.log(reduceArr);

// Tasks
// 1. Create 5 arrays and flatten them
// 2. Create an Array of 10 people with their age and count them