console.log("Learning Objects");

let itemName='Running shoes';
let price=2500;
let avgRating=4.5;
let numberOfRatings=38;


let product={
 company:'nike',
 'item-Name':'Running shoes',
 price:2500,
 avgRating:4.5,
 numberOfRatings:38,
  rating:{
    fiveStar:10,
    fourStar:5,
    threeStar:3,
    twoStar:12,
    oneStar:8,
}

};
console.log(product.rating.fiveStar);

let rating={
    fiveStar:10,
    fourStar:5,
    threeStar:3,
    twoStar:12,
    oneStar:8,
}

console.log('dot notation:',product.company);
console.log('Bracket notation:',product['item-Name']);
let key='avgRating';
console.log('Bracket notation:',product[key]);



console.log(product);
console.log(typeof product);

// Modifying the object
product.discount=50;
product.price=50;
console.log('After Modifying:',product);
delete product.numberOfRatings;
console.log('After delete:',product);