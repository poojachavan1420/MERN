console.log('Object Equality');
let a={firstName:'raju'};
let b=a;
let c={firstName:'raju'};

console.log(a==b);
console.log(a===b);
console.log(a==c);
console.log(a===c);

let student1={
    firstName:'Raju',
    lastName:'kumar',
    age:20,
    address:{
        city:'banglore',
        state:'karnataka',
        houseNo:10,
        road:'MG Road'
    },
    subjects:["Maths","chemistry",,"physics","Biology"],
    feesPaid:true,
}

let student2={
    firstName:'Ranjan',
    lastName:'kumar',
    age:20,
    address:{
        city:'mujaffar',
        state:'uttarpradesh',
        houseNo:12,
        road:'abdul kalam Road'
    },
    subjects:["Maths","chemistry",,"physics","Biology"],
    feesPaid:true,
}