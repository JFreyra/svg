var img = document.getElementById("img");

var c = document.createElementNS("http://www.w3.org/2000/svg","circle");

c.setAttribute("cx",0);
c.setAttribute("cy",0);
c.setAttribute("r",100);
c.setAttribute("fill","red");
c.setAttribute("stroke","black");

img.appendChild(c);