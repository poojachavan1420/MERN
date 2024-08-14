// Normal function
function add1(first,second){
  return first+second;
};
console.log(add1(4,6));

// Anonymous function

const add2= function (first,second){
   return first+second;
}
console.log(add2(10,8));

// Arrow function

const add3=(first,second)=> {
  return first+second;
}
console.log(add3(10,8));

const square=num=>{
  return num*num;
}
console.log(square(2));

const square1=num=> num*num;
console.log(square1(8));

// Application with Array

const numbers =[2,,4,6,8,10];

let squares =numbers.map(function(num){
  return num*num;
});

let square3 =numbers.map(num=>num*num);
