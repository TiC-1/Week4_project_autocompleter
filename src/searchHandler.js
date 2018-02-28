var url = require("url");

function wordSearch(request, response){
var words = ["a", "b", "c", "d", "f", "a", "b", "c", "d", "f"];
var autocomplete = ["Acathla",
"Ano-Movic Demons: The Straleys",
"Anyanka",
"Arney",
"Artode",
"Assassin demon",
"Avilas",
"Baker",
"Balthazar",
"Barney the Empath Demon",
"The Beast",
"The Beast of Amalfie",
"Billy Blim",
"Bohg’Dar Demon",
"Boone",
"Boretz Demon",
"Brachen Demons",
"Bringers",
"Bro’os (“Teeth”) the Loan-Shark demon",
"Brotherhood of Seven: Marc",
"Senator Helen Brucker",
"Cantonese Fook-Beast"]
// var userInput = request.filter

  var query = url.parse(request.url, true).query;
  var userInput = query.description;
  console.log(userInput);

var output = [];
// for (var i=0; i<words.length; i++){
//   if (userInput == words[i]){
//     output.push(words[i]);
//   }
// }
for (var i = 0, l = autocomplete.length; i < l && output.length < 5; i++) {
var word = autocomplete[i];
if (word.match(userInput)) {
output.push(word);
}
// output.push(word);
}
console.log(output);
return output;


  response.end(JSON.stringify(output));

}


module.exports = wordSearch;
