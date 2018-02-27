var http = require("http");
// var index = require("./src/index.js");
var server = http.createServer();

server.listen(3006, function() {
  console.log("listenig port 3006");
});
