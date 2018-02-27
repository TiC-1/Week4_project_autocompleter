var http = require("http");
var router = require("./src/router");
var server = http.createServer(router);

server.listen(3005, function() {
  console.log("listenig port 3005");
});
