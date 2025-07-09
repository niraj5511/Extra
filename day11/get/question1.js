const http = require("node:http");
const { json } = require("node:stream/consumers");

http
  .createServer(function (req, res) {
    if (req.url.startsWith("/user/greet?")) {
      const name = req.url.split("=")[1];
      res.setHeader("content-type", "application/json");
      res.end(
        JSON.stringify({
          message: `Hello ${name}`,
        })
      );
    }
  })
  .listen(5000);

console.log("Question server started");
