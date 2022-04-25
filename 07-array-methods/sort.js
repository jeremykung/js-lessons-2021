// SORT
// by Jackson Chen

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);

//array1.sort((a,b) => a-b );


var items = [
{ name: 'Edward', value: 21 },
{ name: 'Sharpe', value: 37 },
{ name: 'And', value: 45 },
{ name: 'The', value: -12 },
{ name: 'Magnetic', value: 13 },
{ name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
return b.value - a.value;
});
console.log(items);

// create an array with 6 people include thier name and age
// 1.sort them by age from young to old
// 2.sort them by age from old to young
// 3.sort them by name