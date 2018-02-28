var fs = require("fs");
var querystring = require("querystring");
var staticHandler = require("./handler.js");

function router(request, response) {
  var endpoint = request.url;
  if (endpoint === "/") {
    staticHandler.index(request, response);
  } else if (endpoint === "/search") {
    response.end(JSON.stringify(["a", "b", "c", "d", "f", "a", "b", "c", "d", "f"]));
  } else {
    staticHandler.assets(request, response);

  }

}

module.exports = router;
