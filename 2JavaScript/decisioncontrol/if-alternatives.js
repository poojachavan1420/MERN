
//Ternary operator:
let num=5;
let result= num %2 == 0 ? 'Even' : 'odd';/*first value is taken(after checked condn ?) when condition is true , another value is taken (after colon) when condition is false in ternary operator*/
console.log(`The number is ${result}.`);


//Guard operator:
/* Used when fallback value is needed*/ 
let username="";
let fallbackValue='Guest';
let greeting = `Welcome ${username || fallbackValue}`;
console.log(greeting);


//Default operator:
/*Used when null and undefined consider as falsy */
 username;
 fallbackValue='Guest';
 greeting = `Welcome ${username ?? fallbackValue}`;
console.log(greeting);

