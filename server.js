var http = require("http");
var router = require("./src/router.js")
var server = http.createServer(router);

server.listen(3006, function() {
  console.log("listening port 3006");
});
