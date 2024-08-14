// Q.1 Create an array of numbers [5,6] .Add 4 at the beginning and 7 at the end of the array

let arr=[5,6];
// Add 4 at the begining
arr.unshift(4);
// Add 7 at the end
arr.push(7);
console.log(arr);

// Q.2 Create a method to return an element at a particular position in the array

let arr1=[4,5,6,7];

function getElementAtIndex (Index){
  if(Index>=0&& Index<arr1.length){
  return arr1[Index];
  }else{
    return "index out of range" ;
    }
}

console.log(getElementAtIndex(2));
console.log(getElementAtIndex(6));

// Q.3 Create an array copy using slice method

let originalArray=[4,5,6,7];
let copiedArray=originalArray.slice();
console.log(copiedArray);