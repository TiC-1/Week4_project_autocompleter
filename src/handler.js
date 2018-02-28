var fs = require("fs");
var autocomplete = require("./dictionary.js")

function indexHandler(request, response) {
    fs.readFile(__dirname + "/../public/index.html", function(error, file) {

      if (error) {
        console.error(error);
        response.writeHead(404);
      } else {
        response.writeHead(200, {
          "Content-type": "text/html"
        });
        response.write(file);
      }
      response.end();
    });

  }

  function searchHandler(request, response){
          var text = request.url;
          const parsed = queryString.parse(text);
          console.log(parsed['/search']);
          var result = wordSearch(parsed['/search']);
          response.writeHead(200,{'Content-Type': 'application/json'}, function (error){
          if (error){
              console.log('searchHandler ' + error);
              return;
              }
            });
          console.log(result);
          response.end(JSON.stringify(result));
      };


function assetsHandler (request, response){
  fs.readFile(__dirname + "/../public/" +request.url, function(error, file) {
    if (error) {
      console.error(error);
      response.writeHead(404);
    } else {
      response.write(file);
    }
    response.end();
  });


}


  module.exports = {index: indexHandler, assets: assetsHandler};
