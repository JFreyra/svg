
var highlight = function(e){
    alert(e.className);
    //event.stopPropagation();
};


var list = document.getElementsByTagName("li");
for(var i = 0; i < list.length; i++){
    console.log(list[i].className)
    list[i].addEventListener("mousedown",highlight(list[i]),false);
};




