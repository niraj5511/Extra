const http = require("node:http");

http
  .createServer(function (req, res) {
    console.log("Req Object", req);
    if (req.url.startsWith("/login")) {
      let url = req.url;
      const queryData = url.split("?")[1].split("&");
      const email = queryData[0].split("=")[1];
      const password = queryData[1].split("=")[1];
      console.log("Email", email, "Password", password);

      if (email == "abc@gmail.com" && password == "abc") {
        res.end(JSON.stringify({
          message: "Login Success",
        }));
      } else {
        res.end(JSON.stringify({
          message: "Login Failed",
        }));
      }

      // res.end("No need to wait")
    } else res.end("Server is working");
  })
  .listen(4000);
console.log("Server has started");
