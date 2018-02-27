var server = "localhost:3002"; //change in function of the server

function request(cb, url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) { // Request is completed
        if (xhr.status === 200) { // Request succeeded
          var responseObj = JSON.parse(xhr.responseText); // ok?
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

function getWordlist(cb, state) {
    var url = (server + str); // completare
    request(function(err, obj) {
       var wordlist = obj;
      cb(wordlist);
    }, url);
  }