const http = require('node:http')
const server = http.createServer(function(req, res){
    console.log("inside function");
    console.log("Req", req);
    console.log("Url: ",req.url);
    
    

})

server.listen(4000)
console.log(http);
console.log("Server is running");