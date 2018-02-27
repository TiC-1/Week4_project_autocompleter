function updateDom(state){
    console.log(state);
}

function getInputValue(){
    var str = document.getElementById("input_box").value;
     getWordlist(updateDom, str);   
}

function listNode(cb, listobj){
    var x = document.getElementById("ulist");
    listobj.forEach(function(obj){
       let listitem = document.createElement("li");
       listitem.textContent = obj;
       x.appendChild(listitem);
     });
console.log(x);
     cb(x);
    }