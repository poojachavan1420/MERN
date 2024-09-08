let student1  = {
  name:'advika',
  age:1.5,
  course:'IT',
  roll :1,
  printName(){
    console.log(this.name);
}
}

let student2  = {
    name:'pooja',
    age:20,
    course:'CSE',
    roll :14,
    
  }

  function Student(name,age,course,roll){
    this.name=name;
    this.age=age;
    this.course=course;
    this.roll=roll;

    this.printName=function(){
        console.log(this.name);
    }
  }

let student3 = new Student ('Hari',19,'IT',3);
console.log(student1);
console.log(student2);
console.log(student3);

let student4 = new Student ('Geeta',14,'CSE',7);
console.log(student4);

student1.printName();
// student2.printName();
student3.printName();
student4.printName();