// Q.1 create a function to check if a number is odd or even

function checkOddOrEven(){
 let num=prompt("Enter a Number");
 num=parseInt(num);
  if(num%2===0){
    console.log("The number is Even");
  }else{
    console.log("The number is Odd");
  }
}
checkOddOrEven();

// Q.2 Create a function to return larger of the two numbers.

function largerNumber(){
 let a=59;
 let b=65;
console.log(Math.max(a,b));
}
largerNumber();

// Q.3 create a function to convert celcius to fahrenheit

function convertCelciusToFahrenheit(){
  let C=prompt("Enter a tempreture in celcius");
  console.log((F=(9/5)*C+32));
}
convertCelciusToFahrenheit();

// Q.4 Define a function square that takes a number and returns its square

function numberReturnsSquare(){
    let num=parseInt(prompt("Enter a number"));
    console.log(num*num);
}
numberReturnsSquare();

// Q.5 Demonstrate with a function increment that the original number passed to it does not change after increment it inside the function

function increment(num){
    num++;
    console.log("incremented value is :" + num);
}
let num=10;
console.log(increment(num));
console.log("The original value that is not being affected");

// Define  a function getAverage that takes five numbers and returns its average

function getAverage(){
    let num1=78;
    let num2=87;
    let num3=67;
    let num4=56;
    let num5=57;
    let Average=((num1+num2+num3+num4+num5)/5);
    console.log(Average);
}
getAverage();

// Create a function concatStrings that takes two strings and returns their concatenation

function concatStrings(){
    let str1="pooja";
    let str2="srikant";
    console.log(str1+str2);
}
concatStrings();