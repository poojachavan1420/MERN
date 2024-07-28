console.log('AND operator');
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

console.log('OR operator');
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);

console.log('NOT operator');
console.log(!true);
console.log(!false);

// let num=67;
// if(num >0 && num % 2===0){
//   if(num % 2 == 0){
//     console.log('Number is even and positive');
// }else{
//     console.log('Number is odd and positive');
// }
// }else if(num<0){
//     console.log('Number is negetive');
// }else{
//     console.log('Number is Zero');
// }

let num=-1;
if(num >0 && num % 2===0){
    console.log('Number is even and positive');
//   if(num % 2 == 0){
//     console.log('Number is even and positive');
// }else{
//     console.log('Number is odd and positive');
// }
}else if( num >0 && num % 2!==0){
    console.log('Number is positive and odd number');
}else if(num<0){
    console.log('Number is negetive');
}else{
    console.log('Number is 0');
}

