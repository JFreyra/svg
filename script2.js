var img = document.getElementById("img1");
var clear = document.getElementById("clear1");

function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left,
    top: el.top
  };
};

function createCircle(){
    var mouseX = event.clientX - getOffset(img).left;
    var mouseY = event.clientY - getOffset(img).top;
    console.log(mouseX);
    console.log(mouseY);

    var c1 = document.createElementNS("http://www.w3.org/2000/svg","circle");
    
    c1.setAttribute("cx",mouseX);
    c1.setAttribute("cy",mouseY);
    c1.setAttribute("r",10);
    c1.setAttribute("fill","red");
    c1.setAttribute("stroke","black");

    return c1;
};

function addCircle(){
    var cir = createCircle();
    img.appendChild(cir);
};

var clearsvg = function(){
    while(img.lastChild){
	img.removeChild(img.lastChild);
    };
};

clear.addEventListener("click",clearsvg);
img.addEventListener("mouseover",addCircle);
