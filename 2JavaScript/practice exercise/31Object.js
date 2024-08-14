// Q.1 Create object to represent a product from Myntra

let product={
id:12345,
name:"Roadster Men's casual Shirt",
Brand:"Roadster",
category:"Mens Clothing",
subCategory:"Shirts",
price:909,
discountedPrice:456,
DiscountPercentage:30,
rating:4.8,
reviews:678,
sizes:['S','M','L','XL'],
colors:['White','Blue','Black'],
material:'Cotton',
occasion:'Casual'
};

// Q.2 Create an object with two references and log changes to one object by changing the other one 

let obj1={
    name:"pooja",
    age:30
}
// create another object with same reference
let obj2=obj1;
// log the initial statee of obj1
console.log("initial state of the obj1:",obj1);

// changed the property in obj2
obj2.name="Advika";

// log the change state of the obj1
console.log("changed the state of obj1:",obj1);


// Q.3 Use bracket notation to display delivery-time

let product1={
    "product-name":"ghagra-choli",
    "delivery-time":"within 5 days of working"
}
console.log('Delivery time of product:',product1["delivery-time"]);


// Q.4 Given an object {message:'good job',status:'complete'}use de-structuring to create two variables message and status

let obj={message:'good job',
level:'complete'
};
let{message ,level}=obj;
console.log(message);
console.log(level);

// Q.5 Add function isIdentical Product to compare two product objects
let prod1={
id:1,
name:'product1',
message:'good job',
level:'complete'
};

let prod2={
id:2,
name:'product2',
message:'good job',
level:'complete'
};

let prod3={
id:3,
name:'product3',
message:'good job',
level:'complete'
};

function isIdenticalProduct(productA,productB){
    return JSON.stringify(productA)===JSON.stringify(productB);
}

console.log(isIdenticalProduct(prod1,prod2));
console.log(isIdenticalProduct(prod1,prod3));

