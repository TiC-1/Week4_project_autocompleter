var fs = require("fs");
var autocomplete = [];

fs.readFile(__dirname + "/../words.txt", 'utf8', function (error, data){
autocomplete = data.split('\n');
// console.log(autocomplete);
// return callback (error, autocomplete.words);
});

var wordSearch = function (str) {
  console.log(str +"this is string");
  var finalArr = autocomplete.filter(function(character){
    return character.match(str);
  });
  var finalArr2 = finalArr.slice(0, 10);
}

module.exports = wordSearch;
