var http = require("http");
var router = require("/router.js")
var server = http.createServer(router);

server.listen(3006, function() {
  console.log("listenig port 3006");
});
