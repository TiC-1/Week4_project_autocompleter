// Root domain
var server = "http://localhost:3006";


// Main function to get infos from server
function getWordlist(cb, state) {
  var url = (server + "/" + state);
  request(function(err, obj) {
    var wordlist = obj;
    cb(wordlist);
  }, url);
}


// Generic funtion to send a request and parse the returned string into an object
function request(cb, url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // Request is completed
      if (xhr.status === 200) { // Request succeeded
        var responseObj = JSON.parse(xhr.responseText);
        console.log("response=" + responseObj); // ok?
        cb(null, responseObj);
      } else { // Error in request
        var errorMessage = xhr.responseText;
        cb("Error " + url + " " + errorMessage);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}