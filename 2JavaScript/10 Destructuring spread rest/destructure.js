let student={
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

function printName(argStudent){
//   let firstName=argStudent.firstName;
//   let lastName=argStudent.lastName;

  let {firstName,lastName}=argStudent;
  console.log('Name:',firstName,lastName);

}

printName(student);