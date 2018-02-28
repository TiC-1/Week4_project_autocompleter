var autocomplete = require("./dictionary.js");

var wordSearch = function (str) {
  console.log(str +"this is string");
  var regex = new RegExp('^'+ str, 'i');
  var finalArr = autocomplete.match(regex);
  })
  var finalArr2 = finalArr.slice(0, 5);

return finalArr2;
console.log(finalArr2);
}

module.exports = wordSearch;







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
