console.log('events');

let clickHandler=()=> {
    console.log('Button clicked');
}

let buttonClickHandler=()=> {
    for(let i=0;i<10;i++){
        console.log(i);
    }
}
let button=document.getElementById('myButton');
button.onclick= buttonClickHandler;