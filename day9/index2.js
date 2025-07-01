const http = require("node:http");
const server = http.createServer(function (req, res) {
  res.end("Hello World");
});

server.listen(4000);
console.log("Server is running");
