// core module
const http = require('http');

// local module
const {handler} = require('./RequestHandler')


const server = http.createServer(handler);
const PORT = 5173;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${5173}`);
});