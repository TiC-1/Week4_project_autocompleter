// div "acPreview" (autocomplete Preview) will be the place where we'll do DOM manipulation
var container = document.getElementById("acPreview");


// Function to track any change in the form text field in index.html
function getInputValue() {
  var str = document.getElementById("inputBox").value;
  // Launch main (or first) function in logic.js with updateDOM as a callback
  getWordlist(updateDOM, str);
}


// General function to update DOM
// (We keep it like this for potential further developments)
function updateDOM(state) {
  if (container) renderState(state);
}


// General function to render the new state
function renderState(state) {
  // Create a new <ul></ul> with 'acList' class
  var wordUL_node = document.createElement('ul');
  wordUL_node.setAttribute('class', 'acList');
  // Insert <li> calling createLI function
  state.forEach(function(item) {
    wordUL_node.appendChild(createLI(item));
  });
  // Replace previous 'container' content (<ul>...</ul>)
  container.replaceChild(wordUL_node, container.firstChild);
};


// General function to create list items
function createLI(words) {
  // Create a new <li></li>
  var wordLI_node = document.createElement("li");
  //Add some class to it to style it
  wordLI_node.setAttribute('class', 'acWord');
  // Add son content from the returned array from server
  wordLI_node.textContent = words;
  // Return li to the parent function (renderState)
  return wordLI_node;
};
