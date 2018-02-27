var fs = require("fs");
var querystring = require("querystring");
var staticHandler = require("./handler.js");
var create = require("./blogpost/create.js");
var index = require("./blogpost/index.js");

function router(request, response) {
  var endpoint = request.url;
  if (endpoint === "/") {
    handler.index(request, response);
  } else if (endpoint === "/blogpost/create") {
    create(request, response);
  } else if (endpoint === "/blogposts") {
    index(request, response);
  } else {
    handler.assets(request, response);

  }

}

module.exports = router;
