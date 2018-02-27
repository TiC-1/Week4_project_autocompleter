var fs = require("fs");

var autocomplete = {};

fs.readFile(__dirname + "/../words.txt", 'utf8', function (error, data){
autocomplete.words = data.split('\n');
// console.log(autocomplete);
return callback (error, autocomplete.words);
});

module.exports = autocomplete;
