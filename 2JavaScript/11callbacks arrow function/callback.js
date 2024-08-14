function hello(name){
    console.log('Hello ' +  name);
}

let hello=function(name){
    console.log('Hello ' +  name); 
}

// hello('Advika');

function capitalize(name){
    let upper=name.toUpperCase();
    console.log(upper);
}


function processuserInput(process){
 let studentName=prompt('Enter your name: ');
 process(studentName);
}

processuserInput(hello);
processuserInput(capitalize);