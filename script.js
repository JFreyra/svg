var img = document.getElementById("img1");
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
    while(img.lastChild){
	img.removeChild(img.lastChild);
    };
    prevX = -1;
    prevY = -1;

};

clear.addEventListener("click",clearsvg);
img.addEventListener("mousedown",drawDot);


// animation

var img2 = document.getElementById("img1");
var clear2 = document.getElementById("clear2");

var clearsvg2 = function(){
    while(img2.lastChild){
	img2.removeChild(img2.lastChild);
    };
};

var drawDot2 = function(radius){
    var cir = document.getElementsByTagName("circle")[0];
    var myRad = parseInt(cir.getAttribute("r"));
    
    clearsvg2();

    locX = img2.width/2;
    locY = img2.height/2;

    var c1 = document.createElementNS("http://www.w3.org/2000/svg","circle");
    
    c1.setAttribute("cx",locX);
    c1.setAttribute("cy",locY);
    c1.setAttribute("r",radius);
    c1.setAttribute("fill","red");
    c1.setAttribute("stroke","black");

    img.appendChild(c1);
};

var animation = function(){
    var intervalID = window.setInterval(drawDot2,16);
    
};

clear.addEventListener("click",clearsvg2);
img.addEventListener("mousedown",animation);
