var container = document.getElementById("acPreview");

function updateDom(state){
    console.log(state);
}

function getInputValue(){
    var str = document.getElementById("input_box").value;
     getWordlist(updateDom, str);   
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
    var wordLiNode = document.createElement('ul');
    state.forEach(function(s) {
      wordLiNode.appendChild(createLi(s));
    });
    container.replaceChild(wordLiNode, container.firstChild);
  };
  
  function updateDOM() {
    // 1. crea un nodo con createSongNode
    // 2. inserisce titolo e cover della canzone
    var words = testobj;
    console.log(testobj);
    if (container) renderState(words);
  
  } //fine della funzione updateDOM