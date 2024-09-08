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

// Using event handler
// button.onclick= buttonClickHandler;
// button.onclick = clickHandler;

// Using event listner
button.addEventListener('click',clickHandler);
button.addEventListener('click',buttonClickHandler);button.removeEventListener('click',clickHandler);
