console.log("Using Local Storage");
// localStorage.setItem('name','KGCoding');

// let user={
//     firstName:"pooja",
//     lastName:"chavan",
//     age:20,
//     email:'chavanpooja92241@gmail.com',
//     hobbies:['dancing','reading'],
// };
// localStorage.setItem('userInfo',JSON.stringify(user));

let userInfoStr=localStorage.getItem('userInfo');
console.log(userInfoStr);
console.log(typeof userInfoStr);
let userInfo=JSON.parse(userInfoStr);
console.log(userInfo);
