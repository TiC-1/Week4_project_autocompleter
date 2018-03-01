// Main function to get infos from server
function getWordlist(cb, string) {
  var url = "/search?description=" + string;
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
        cb(null, responseObj); // Launch callback function (updateDOM)
      } else { // In case of error in request
        var errorMessage = xhr.responseText;
        cb("Error " + url + " " + errorMessage);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
