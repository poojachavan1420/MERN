console.log("Different methods of array");
let arr=[1,2,3,4,5,6,7,8,9,0,18,23];
let obj={};
console.log('isArray:',Array.isArray(arr));
console.log('isArray:',Array.isArray(obj));

console.log('toString',arr);
arr.push(34);
console.log('toString',arr);
arr.pop();
console.log('toString',arr);
arr.shift();
console.log('toString',arr);
arr.unshift();
console.log('toString',arr);
arr.sort();
console.log('toString',arr);

const fruits=["strawberry","cherry","lichie","kiwi"];
console.log(fruits);

// Add the elements at the end of the array using push
fruits.push=("pineapple");
console.log('After push:',fruits);

// Removes the last element using pop
fruits.pop();
console.log('After pop:',fruits);

// Add the element to the array using unshift
fruits.unshift("Apple");
console.log('After unshift:',fruits);

// Removes the first element from array using shift
fruits.shift();
console.log('After shift:',fruits);


const numbers=[1,2,3,4,5];

// Find the first element greater than three
const firstGreaterThanThree=numbers.find((num)=>num>3);
console.log("first number greater than 3:",firstGreaterThanThree);

// Find the index of number 3
const index=numbers.indexOf(3);
console.log("index of number 3:",index);

arr.forEach(function(item,i){
    if (i===2) return;
console.log('For each:',item,i )
});




let newArr=arr.map(function(item){
console.log('map:',item);
return item*item;
});


let thirdArr=newArr.filter(function(item){
    
    return item%2===0;
    });
console.log('map',arr);
console.log('map',newArr);
console.log('map',thirdArr);

