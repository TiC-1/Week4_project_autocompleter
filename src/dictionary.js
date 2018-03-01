var fs = require("fs");
var autocomplete = [];

function read(callback) {
  fs.readFile(__dirname + "/../words.txt", 'utf8', function(error, data) {
    autocomplete = data.split('\n');
    callback(autocomplete);
  });

}

module.exports = read;
