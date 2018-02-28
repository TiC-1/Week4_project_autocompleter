var container = document.getElementById("acPreview");


function updateDOM(state) {
  // 1. crea un nodo con createSongNode
  // 2. inserisce titolo e cover della canzone
  var words = state;
  console.log(words);
  if (container) renderState(words);

} //fine della funzione updateDOM

function getInputValue(){
    var str = document.getElementById("input_box").value;
     getWordlist(updateDOM, str);   
}


var createLi = function(words) {
    console.log(words);
 
    var wordLi = document.createElement("li");
  
    //added some classes for the style in the DOM
    wordLi.setAttribute('class', 'li_item');

    wordLi.textContent = words ;

    
  
    // songNode.appendChild(songCover);
  
  
    return wordLi;
  };
  

  var renderState = function(state) {
    var words = state;
    var wordLiNode = document.createElement('ul');
    console.log("oggetto state:" + words);
    console.log("oggetto state:" + state);
    words.forEach(function(x) {
      wordLiNode.appendChild(createLi(x));
    });
    container.replaceChild(wordLiNode, container.firstChild);
  };
  
