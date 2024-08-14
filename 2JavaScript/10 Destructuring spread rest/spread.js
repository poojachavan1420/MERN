let obj={
    a:45,
    x:78,
    hello:"World"
}

let even=[2,4,6,8,10];
console.log(even);
newEven=[0,...even,14];
newEven.push(12);
console.log('even:',even);
console.log('newEven:',newEven);
console.log(newEven.length);

let obj1={
    a:45,
    x:78,
    hello:"World",
    z:{
        name:'pooja',
        age:20
    }

};

let newObj1={...obj1};
console.log('obj1:',JSON.stringify(obj1));
console.log('newObj1:',JSON.stringify(newObj1));

newObj1.x=100;
newObj1.z.name='Advika';

console.log('obj1:',JSON.stringify(obj1));
console.log('newObj1:',JSON.stringify(newObj1));
