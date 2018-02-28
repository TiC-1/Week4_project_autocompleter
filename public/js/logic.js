// Root domain
var server = "http://localhost:3006/search?description=";


// Main function to get infos from server
function getWordlist(cb, state) {
  var url = server + state;
  request(function(err, obj) {
    cb(obj);
  }, url);
}


// Generic funtion to send a request and parse the returned string into an object
function request(cb, url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // When request is completed
      if (xhr.status === 200) { // When request succeeded
        var responseObj = JSON.parse(xhr.responseText);
        cb(null, responseObj); // Launch callback function
      } else { // In case of error in request
        var errorMessage = xhr.responseText;
        cb("Error " + url + " " + errorMessage);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
