var autocomplete = require("./dictionary.js");
var fs = require("fs");
var autocomplete = [];
var result = require("./handler.js")


function wordSearch(userInput, autocomplete){

// var cleanInput = result.replace(/[^A-Za-z]/g, '');
var output = [];
// var re = new RegExp('\^' + cleanInput, 'i');
// var re = new RegExp('\^', 'i');
for (var i = 0, l = autocomplete.length; i < l && output.length < 5; i++) {
var word = autocomplete[i];
// if (re.test(word)) {
// output.push(word);
// }
output.push(word);
}
console.log(output);
return output;

}


// var wordSearch = function (str) {
//   console.log(str +"this is string");
//   var regex = new RegExp('^'+ str, 'i');
//   var finalArr = autocomplete.match(regex);
//   })
//   var finalArr2 = finalArr.slice(0, 5);
//
// return finalArr2;
// console.log(finalArr2);
// }

module.exports = wordSearch;
module.exports = autocomplete;







// function filterArray(autocomplete){
//   console.log(autocomplete);
//   // var cleanInput = input.replace(/[^A-Za-z]/g, '');
// var output = [];
//   //
//   // var re = new RegExp('\^' + cleanInput, 'i');
//
//   for (var i = 0, l = autocomplete.length; i < l && output.length < 5; i++) {
//   var word = autocomplete[i];
//
//   output.push(word);
//
//   }
//   console.log(output);
//   return output;
//   }
//
