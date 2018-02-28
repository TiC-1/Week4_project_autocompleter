var url = require("url");

function wordSearch(request, response){
var words = ["a", "b", "c", "d", "f", "a", "b", "c", "d", "f"];
// var userInput = request.filter

  var query = url.parse(request.url, true).query;
  var userInput = query.description;
  console.log(userInput);

var output = [];


for (var i=0; i<words.length; i++){
  if (userInput == words[i]){
    output.push(words[i]);
  }

}

  response.end(JSON.stringify(output));

}


module.exports = wordSearch;
