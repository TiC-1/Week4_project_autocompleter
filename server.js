var http = require("http");
var router = require("./src/router.js")
var autocomplete = require("./src/dictionary.js");
var server = http.createServer(router);

server.listen(3006, function() {
  console.log("listenig port 3006");

});
