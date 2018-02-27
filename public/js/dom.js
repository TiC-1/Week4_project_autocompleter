function updateDom(state){
    console.log(state);
}

function getInputValue(){
    var str = document.getElementById("input_box").value;
     getWordlist(updateDom, str);   
}
