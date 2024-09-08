console.log("fetch.js");
fetch('https://jsonplaceholder.typicode.com/user')
.then(response => response.json())
.then(json => console.log(json))
.then(error => console.log(error))