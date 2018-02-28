var fs = require("fs");
var autocomplete = [];

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

// function searchHandler(request, response) {
//   fs.readFile(__dirname + "./wordsTest.txt", 'utf8', function (error, data){
//     autocomplete = data.split('\n');
//     console.log(autocomplete);
//     if (error) {
//       console.error(error);
//       response.writeHead(404);
//     } else {
    
//     }
    
//     });
// }


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
