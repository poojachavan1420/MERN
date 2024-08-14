// Q1.if-else statement :write a code that checks if anumber is positive ,negetive  or zero .use an 'if-else' statement for this purpose.

// if else statement
let num=parseInt(prompt("Enter a number:"));
if(num>0){
    console.log('number is positive');
}else if(num<0){
    console.log('number is negetive');
}else{
    console.log('number is zero');
}

//Q.2 Nested if statement:write a code to determine the ticket price for a movie.


let age=prompt("Enter the age");
if(age<13){
    console.log('The ticket is free');
}else if(age>=13 && age<=60){
    if(isWeekend){
console.log("The ticket is 500");
    }else{
        console.log("The ticket is 300");
    }
}else{
    console.log("The ticket is 250");
}

//Q.3 if-else if ladder:write a code determine grades based on marks:

let marks=prompt("Enter a marks");

if(marks>90){
    console.log('Grade is A');
}else if(marks<=89 && marks >=80){
    console.log('Grade is B');
}else if(marks<=79 && marks >=70){
    console.log('Grade is C');
}else if(marks<=69 && marks >=60){
    console.log('Grade is D');
}else{
    console.log('Grade is F');
}

// Q.4 Ternary operator:
age=prompt("enter the age");
let getstatus = age>=18? "adult" : "minor";
console.log(getstatus);

// Q.5 switch case:Write a javascript switch case statement that evaluates the variable 'day' and returns a specific greeting:


let day=prompt("Enter a day");
switch(day){
    case "Monday":
        console.log("Happy Monday!");
        break;
        case "Tuesday":
        console.log("Terrific Tuesday!");
        break;
        case 3:
        console.log("Wonderful Wednesday!");
        break;
        case 4:
        console.log("Thriving Thursday!");
        break;
        case 5:
        console.log("Fun Friday!");
        break;
        case 6:
        console.log("Super saturday!");
        break;
        case 7:
        console.log(" Serene Sunday!");
        break;
        default:
        console.log("Invalid day");
        break;
}

// Q.6 Comparison And logical operators:

 age=10;
 let income=60000;

 let result=(age<13 || age>65) && income>=50000;

 console.log(result);

//Q.7 Guard Operator:
let userinput=null;
let output =userinput??"No input provided";
console.log(output);