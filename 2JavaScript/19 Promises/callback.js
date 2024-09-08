console.log("checking callback hell");

function getDataFromInternet(successCallback){
    console.log("Getting data From Internet");
    setTimeout(() => {
       
       successCallback('KG coding');
    },8000);
}

function setDataToDB(successCallback){
    console.log("sending data to DB");
    setTimeout(() => {
       
       successCallback('db_row_25');
    },2000);
}

function sendResponseToUser(successCallback){
    console.log("sending response to user");
    setTimeout(() => {
       
       successCallback('db_row_25');
    },5000);
}

getDataFromInternet((data) => {
    console.log(`Data is fetched ${data}`);
    setDataToDB((id) => {
         console.log(`Data is Saved in DB with id ${id}`)
    sendResponseToUser(() =>{
        console.log('Response is send to User');
    });
      })
});