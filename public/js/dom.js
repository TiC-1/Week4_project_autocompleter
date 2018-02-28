// div "acPreview" (autocomplete Preview) will be the place where we'll do DOM manipulation
var container = document.getElementById("acPreview");


// Function ti track any change in the form text field in index.html
function getInputValue() {
  var str = document.getElementById("input_box").value;
  // Launch main function in logic.js with updateDOM as a callback
  getWordlist(updateDOM, str);
}


// General function to update DOM
function updateDOM(state) {
  var words = state;
  if (container) renderState(words);
}


// General function to render the new state
var renderState = function(state) {
  var words = state;
  var wordLiNode = document.createElement('ul');
  words.forEach(function(x) {
    wordLiNode.appendChild(createLi(x));
  });
  // Repplace old state with the new one
  container.replaceChild(wordLiNode, container.firstChild);
};


// General function to create list items
var createLi = function(words) {
  // Create a new <li></li>
  var wordLi = document.createElement("li");
  //Add some class to it to style it
  wordLi.setAttribute('class', 'li_item');
  // Add son content from the returned array from server
  wordLi.textContent = words;
  // Return li to the parent function (renderState)
  return wordLi;
};