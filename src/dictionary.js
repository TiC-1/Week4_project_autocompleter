var fs = require("fs");
var autocomplete = [];

fs.readFile(__dirname + "/../words.txt", 'utf8', function (error, data){
autocomplete = data.split('\n');

// // var cleanInput = endpoint.replace(/[^A-Za-z]/g, '');
// var output = [];
// // var re = new RegExp('\^' + cleanInput, 'i');
// var re = new RegExp('\^', 'i');
// for (var i = 0, l = autocomplete.length; i < l && output.length < 5; i++) {
// var word = autocomplete[i];
// if (re.test(word)) {
// output.push(word);
// }
// // output.push(word);
// }
// console.log(output);
// return output;
//
 });

module.exports = autocomplete;
