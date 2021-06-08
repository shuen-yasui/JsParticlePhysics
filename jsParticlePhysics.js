class Particle {
	constructor(){
	}
	update(){
	}
}
var mX=0
var mY=0
function init(){
	update();
}
function update(){
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
  c.beginPath();
  c.arc(mX,mY,10,0,Math.PI * 2,false);
  c.strokeStyle = "white";
  c.stroke();
  c.fillStyle = "black";
  c.fill();
  c.closePath();
	requestAnimationFrame(update);
}
function mouseMove(mouseEvent)
{
  if (mouseEvent)
  {
    //FireFox
    mX = mouseEvent.pageX;
    mY = mouseEvent.pageY;
  }
  else
  {
    //IE
    mX = window.event.x + document.body.scrollLeft - 2;
    mY = window.event.y + document.body.scrollTop - 2;
  }
}
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
canvas.onmousemove = mouseMove;
init();
