function greeting(){
    console.log('Good morning User');
}
// greeting();


//Return values between 1-4:
function getRandomOption(){
  let randomOption=Math.floor(Math.random() * 4+ 1);
  console.log(randomOption);
  return randomOption;
}
// 

function getSum(num1,num2){
    let sum=num1+num2;
    return sum;
}
console.log(getSum(2,3));
console.log(getSum(267,398));