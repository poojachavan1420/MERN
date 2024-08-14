let user={
    firstName:"pooja",
    lastName:"chavan",
    age:20,
    email:'chavanpooja92241@gmail.com',
    hobbies:['dancing','reading'],
};
console.log(user);

let userStr=JSON.stringify(user);
console.log(userStr);
console.log(typeof userStr);


let myStr='{"firstName":"Advika","lastName":"chavan","rollNo":4,"age":1.2,"email":"chavanpooja92241@gmail.com","hobbies":["dancing","reading"]}';

let newUser=JSON.parse(myStr);
console.log(newUser);
console.log(newUser.rollNo);