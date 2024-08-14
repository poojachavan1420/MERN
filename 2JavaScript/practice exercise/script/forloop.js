// Q.1 Create a program to reverse the dogits of a number

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
   console.log (reverseTheDigit(3487));

//Q.2 Create a program to print the fibonacci series upto  a certain number

function printFibonacciSeries(n){
    let num1=0;
    let num2=0;
    let nextnum;

    for(let i=1; i<=n;i++){
      console.log(num1);
      nextnum=num1+num2;
      num1=num2;
      num2=nextnum;
    }
}
printFibonacciSeries(10);

