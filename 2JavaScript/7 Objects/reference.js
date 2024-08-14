console.log('call by value');
let c=10;
d=c;
console.log(`c=${c}`,`d=${d}`);
c=15;
console.log(`c=${c}`,`d=${d}`);

console.log('call by reference');
let x={myValue:10};
let y=x;
let z={myValue:10};
console.log(`x=${x.myValue}`,`y=${y.myValue}`);
x.myValue=15;
console.log(`x=${x.myValue}`,`y=${y.myValue}`);

console.log(x==y);
console.log(z==y);
console.log(z===y);
