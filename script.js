var img = document.getElementById("img");
var clear = document.getElementById("clear1");

function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left,
    top: el.top
  }
}

var prevX = -1;
var prevY = -1;
var drawDot = function(){
    var mouseX = event.clientX - getOffset(img).left;
    var mouseY = event.clientY - getOffset(img).top;

    // line
    console.log(prevX);
    console.log(prevY);
    if(prevX > 0 && prevY > 0){
	var l = document.createElementNS("http://www.w3.org/2000/svg","line");
	
	l.setAttribute("x1",prevX);
	l.setAttribute("y1",prevY);
	l.setAttribute("x2",mouseX);
	l.setAttribute("y2",mouseY);
	l.setAttribute("stroke","black");
	
	img.appendChild(l);

	
	// old circle drawn over line
	var c2 = document.createElementNS("http://www.w3.org/2000/svg","circle");
	
	c2.setAttribute("cx",prevX);
	c2.setAttribute("cy",prevY);
	c2.setAttribute("r",10);
	c2.setAttribute("fill","red");
	c2.setAttribute("stroke","black");

	img.appendChild(c2);
    };

    // update previous coordinates
    prevX = mouseX;
    prevY = mouseY;

    // new circle
    var c1 = document.createElementNS("http://www.w3.org/2000/svg","circle");
    
    c1.setAttribute("cx",mouseX);
    c1.setAttribute("cy",mouseY);
    c1.setAttribute("r",10);
    c1.setAttribute("fill","red");
    c1.setAttribute("stroke","black");

    img.appendChild(c1);

}

var clearsvg = function(){
    for node in img{
	img.removeChild(node);
    };
};

clear.addEventListener("click",clearsvg);
img.addEventListener("mousedown",drawDot);
