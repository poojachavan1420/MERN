// core module
const http = require('http');

// external Module
const express = require('express');

const app =express();

// // local module
// const {handler} = require('./RequestHandler')

// First Middleware
app.use((req,res,next) => {
   console.log('First Middleware',req.url ,req.method);
   next();
}
)

// Second Middleware
app.use((req,res,next) => {
  console.log('Second Middleware',req.url ,req.method);
  next();
}
)

const server = http.createServer(app );
const PORT = 5173;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${5173}`);
});