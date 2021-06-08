class Particle {
	constructor(){
	}
	update(){
    c.beginPath();
    c.arc(mouseX,mouseY,10,0,Math.PI * 2,false);
    c.strokeStyle = "white";
    c.stroke();
    c.fillStyle = "black";
    c.fill();
    c.closePath();
	}
}
function update(){
  c.clearRect(0,0,window.innerWidth,window.innerHeight);
  i=0;
  while(i<particles.length){
    particles[i].update();
    i+=1;
  }
	requestAnimationFrame(update);
}
function mouseMove(mouseEvent){
  if (mouseEvent){
    //FireFox
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;
  }
  else{
    //IE
    mouseX = window.event.x + document.body.scrollLeft - 2;
    mouseY = window.event.y + document.body.scrollTop - 2;
  }
}
var mouseX=0;
var mouseY=0;
var particles=[];
for(var i=0;i<10;i++){
  particles.push(new Particle());
}
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
canvas.onmousemove = mouseMove;
init();
