// External Module
const express = require('express');
const fs = require('fs');
const bodyparser = require ('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res,next)=>{
   res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hamara airbnb</title>
</head>
<body>
    <h1>Welcome to airbnb</h1>
    <a href="/add-home">Add Home</a>
</body>
</html>`)
})

app.post("/add-home",(req,res,next)=>{
   console.log(req.body);
   res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
   
    <title>Home Added</title>
</head>
<body>
    <h1>Home added Successfully</h1>
    <a href="/">Go to home</a>
</body>
</html>`)
})

app.get("/add-home",(req,res,next) =>{
    res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
  
    <title>Add Home</title>
</head>
<body>
    <h1>Add your Home</h1>
    <form action="/add-home" method="post">
        <input type="text" 
        name="houseName"
        placeholder="Name of your house">
          <input type="submit" value="Add Home">
    </form>

</body>
</html>
        `)
});

app.use((req, res, next) => {
  console.log('Request Received', req.url, req.method , req.body);
  next();
});

app.use((req, res, next) => {
    res.statusCode = 404;
    res.write(`
      <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Page Not Found</title>
        </head>
        <body>
          <h1>404 Page Not Found</h1>
        </body>
        </html>
      `);
    res.end();
  })
  
  const PORT = 5173;
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });