var url = require("url");
var heavy = require("./dictionary.js");



function wordSearch(request, response){
var words = ["a", "b", "c", "d", "f", "a", "b", "c", "d", "f"];
heavy(function(autocomplete){

    var query = url.parse(request.url, true).query;
    var userInput = query.description;
    console.log(userInput);


  var output = [];
  // for (var i=0; i<words.length; i++){
  //   if (userInput == words[i]){
  //     output.push(words[i]);
  //   }
  // }
  for (var i = 0, l = autocomplete.length; i < l && output.length < 10; i++) {
  var word = autocomplete[i];
  if (word.indexOf(userInput)===0) {
  output.push(word);
  }
  // output.push(word);
  }
  console.log(output);


    response.end(JSON.stringify(output));



});
// var userInput = request.filter

}


module.exports = wordSearch;
