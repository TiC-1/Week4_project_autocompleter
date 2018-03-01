var fs = require("fs");
var autocomplete = [];

function heavy(callback) {
  fs.readFile(__dirname + "/../wordsHeacy.txt", 'utf8', function(error, data) {
    autocomplete = data.split('\n');
    callback(autocomplete);
  });

}

module.exports = heavy;
