var fs = require("fs");
var autocomplete = [];

fs.readFile(__dirname + "/../words.txt", 'utf8', function (error, data){
autocomplete = data.split('\n');
// console.log(autocomplete);

});

module.exports = autocomplete;
