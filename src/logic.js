var autocomplete = require("/dictionary.js");

function filterArray(input, autocomplete){
  var cleanInput = input.replace(/[^A-Za-z]/g, '');
  var output = [];
  
  var re = new RegExp('\^' + cleanInput, 'i');
  
  for (var i = 0, l = autocomplete.length; i < l && output.length < 5; i++) {
  var word = autocomplete[i];
  if (re.test(word)) {
  output.push(word);
  }
  }
  
  return output;
  }

module.exports = filterArray;
