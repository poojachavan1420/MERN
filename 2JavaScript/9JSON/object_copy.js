let obj={
    a:45,
    b:65,
    c:'hello',
    d:{
        x:87,
        y:93
    }
}
console.log('obj',obj);
let objCopy=copyMyObject(obj);
console.log('obj copy',objCopy)
objCopy.a=100;
objCopy.d.x=111;
console.log(obj.a);
console.log('obj',obj);
console.log('obj copy',objCopy)

function copyMyObject(obj){
    // let obj2=obj;
    // return obj2;

    let objString=JSON.stringify(obj);
    let obj2= JSON.parse(objString);
    return obj2;
}