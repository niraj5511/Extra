const http = require("node:http");
http
  .createServer(function (req, res) {
    if (req.url == "/calculate" && req.method == "POST") {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk.toString());
        res.setHeader("content-type","text/plain")
        res.end(
          JSON.stringify({
            message: "Answer = " + (parseInt(data.num1) + parseInt(data.num2)),
          })
        );
      });
    }
  })
  .listen(5000);

console.log("Question two server post started");

