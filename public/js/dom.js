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
    if (container) renderState(state);
}


// General function to render the new state
var renderState = function(state) {
  var wordUL_node = document.createElement('ul');
  wordUL_node.setAttribute('class', 'acList');
  state.forEach(function(item) {
    wordUL_node.appendChild(createLi(item));
  });
  // Repplace old state with the new one
  container.replaceChild(wordUL_node, container.firstChild);
};


// General function to create list items
var createLi = function(words) {
  // Create a new <li></li>
  var wordLI_node = document.createElement("li");
  //Add some class to it to style it
  wordLI_node.setAttribute('class', 'acWord');
  // Add son content from the returned array from server
  wordLI_node.textContent = words;
  // Return li to the parent function (renderState)
  return wordLI_node;
};
