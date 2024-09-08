function divide(a,b){
    if(b==0){
        let error=new Error('Divide by Zero');
        throw new Error ('Divide by Zero');
    }
    return a/b;
}
console.log(divide(3,6));
try{
console.log(divide(6,0));
}catch(error){
    console.log("error occured");
    console.log("error.message");
}
console.log(divide(8,4));