const http = require("http");

console.log("I was here");

const requestHandler = (req, res) => {
  console.log("Request Received", req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");

  res.write(`
     <!DOCTYPE html>
<html lang="en">
<head>
 <title>Document</title>
</head>
<body>
    <h1>Welcome to First Server</h1>
</body>
</html>
`);
  res.end();
};

const server = http.createServer(requestHandler);
server.listen(5173, () => {
  console.log("Server is running on http://localhost:5173");
});
