// function that return a function
const createDouble=()=>{
 return double=(num)=> num*2;
   
}
const twice=createDouble();
console.log(twice(5));

console.log (createDouble()(4));