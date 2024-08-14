// Q.1 Develope a program using while that prints the multiplication table for a given number

function printMultiplicationTable(num){
    console.log('Multiplication Table');
    let i=1;
    while(i<=10){
    console.log(`${num} X ${i}=${num*i}`);
    i++;
    }
}
let tableNum =prompt("Enter the number for which table has to be  generated");
printMultiplicationTable(tableNum);

// Q.2 Create a program to sum all odd numbers from 1 to a specified number N

function sumOddNumbers(N){
    let sum=0;
    let i=1;
    while(i<=N){
        if(i%2!==0){
            sum+=i;
        }
        i++;
    }
    console.log(`sum of odd numbers from 1 to ${N}: ${sum}`);
}
let N=prompt("Enter a number");
sumOddNumbers(N);

// Q.3 Write the function to calculate the factorial of given number

function getFactorial(num){
    let i=1;
    let result=1;
    while(i<=num){
      result=result*i;
      i++;
    }
  return result;
  }
  
   console.log("Factorial");
   let num =prompt("Enter the number for which factorial needs to be calculated");
   console.log(getFactorial(num));

// Q.4 Create a program that computes the sum of digits of an integer

function sumOfDigits(n){
    let sum=0;
    while(n>0){
    sum=sum+n%10;
    n=Math.floor(n/10);
    }
    console.log(`sum of digits:${sum}`);
}
let n=parseInt(prompt("Enter an integer:"));
sumOfDigits(n);
  
// Q.5 Create a program to find least common multiple (LCM) of two numbers

function find_lcm(){
    let num1=prompt("Enter a number");
    let num2=prompt("Enter a number");
    lcm=1;
    while(true){
        if (lcm%num1==0 && lcm%num2==0){
            console.log("LCM of entered number is:" +lcm);
            break;
        }
        ++lcm;
    }
}
find_lcm();

// Q.6 Create a program to find gretest common divisor(GCD) of two integer

