// core module
const http = require('http');

// local module
const {handler} = require('./RequestHandler')

function compare(num){
   if (num=10){
    console.log('num is 10');
   }else{
    console.log('num is not 10');
   }
}

compare(5);

const server = http.createServer(handler);
const PORT = 5173;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${5173}`);
});