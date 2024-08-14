console.log('Practice Exercise');

// Q.1 Develope a program using while that prints the multiplication table for a given number
function printMultiplicationTable(num){
console.log('Multiplication Table');
let i=1;
while(i<=10){
console.log(`${num} X ${i}=${num*i}`);
i++
}
}

function printMultiplicationTableFor(num){
console.log('Multiplication Table');
for(i=1;i<=10;i++){
console.log(`${num} X ${i}=${num*i}`);
}
}

// let tableNum =prompt("Enter the number for which table has to be  generated");
// printMultiplicationTable(tableNum);


// Q.2Write a function that calculate a factorial of given number

function getFactorial(num){
  let i=1;
  let result=1;
  while(i<=num){
    result=result*i;
    i++;
  }
return result;
}

// console.log("Factorial");
// let num =prompt("Enter the number for which factorial needs to be calculated");
// console.log(getFactorial(num));


//Q.3 Create a program to reverse the digit of number 
function reverseTheDigit(num){
  let result=0;
  for(;num>0;){
    let rem=num % 10;
    console.log(rem,num);
    result=result*10 + rem;
    num=Math.floor(num/=10);
  }
  return result;
}
// console.log (reverseTheDigit(3487));
// console.log (reverseTheDigit(1234));

// Q.4 Create a program using for to display if a number is prime or not
function isPrime(num){
    for( i=2;i<num;i++){
      if(num%i===0){
       return false;
      }
    }
    return true;
}
// console.log(isPrime(7));
// console.log(isPrime(4));
// console.log(isPrime(19));
// console.log(isPrime(23));


// Q.5 create a program that prompts the user to enter a positive nimber.Use a do-while loop to keep asking for the number until the user enters a valid positive number
function inputPositiveNumber(){
  let num;
  do {
    num=prompt("Enter a positive number:");
    console.log(num);
}while(num<0);
return num;
}

let num= inputPositiveNumber();
console.log(`The positive number entered is: ${num}`);