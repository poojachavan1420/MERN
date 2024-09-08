// function getDataFromInternet(successCallback){
//     console.log("Getting data From Internet");
//     successCallback('KG coding');
// }

// getDataFromInternet ((data) => {
//     console.log(`Data is fetched ${data}`)
// });

function getDataFromInternetUsingPromise(){
    return new Promise((resolve,reject)=>{
        console.log('Getting data From Internet using promise');
        for(let i=0; i<10000 ;i++);   
        // console.log(i);
        // resolve('KG coding');
        reject('Internet Timeout');

    });
    
}


let promise =getDataFromInternetUsingPromise()
.then((data) => {
console.log(`Data is fetched ${data}`);
})
.catch((error) =>{
   console.log(`Error:${error}`);
})
.finally(() =>{
    console.log('Finally block');
})