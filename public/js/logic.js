var server = "http://localhost:3006"; //change in function of the server

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

function getWordlist(cb, state) {
    console.log(state);
    var url = (server + "/" + state); // completare
        console.log(url);
        request(function(err, obj) {
        var wordlist = obj;
        cb(wordlist);
    }, url);
  }