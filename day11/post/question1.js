const http = require("node:http");
http
  .createServer(function (req, res) {

    console.log("req.url",req.url)
    console.log("req.method",req.method)
    if (req.url.startsWith("/user/greet") && req.method == "POST") {

        console.log("lll")
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk.toString());
        res.end(
          JSON.stringify({
            message: "Hello" + data.name,
          })
        );
      });
    }
  })
  .listen(5000);

console.log("Question server post started");
