class Particle {
	constructor(pos){
		this.x=0;
		this.y=0;
		this.centerX=0;
		this.centerY=0;
		this.velocity=0.02;
		this.pathRadius=50;
		this.posInRadians = pos;
		this.radius=5;
	}
	update(){
		// Update Positions
		this.posInRadians += this.velocity;
		this.x = this.centerX + (this.pathRadius * (Math.cos(this.posInRadians)));
		this.y = this.centerY + (this.pathRadius * (Math.sin(this.posInRadians)));
		this.centerX=mouseX;
		this.centerY=mouseY;
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
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
  if (mouseEvent){//FireFox
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;
  }
  else{//IE
    mouseX = window.event.x + document.body.scrollLeft - 2;
    mouseY = window.event.y + document.body.scrollTop - 2;
  }
}
var mouseX=0;
var mouseY=0;
var particles=[];
var particleCnt=10;
for(var i=0;i<particleCnt;i++){
  particles.push(new Particle((i/(particleCnt))*Math.PI*2));
}
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
canvas.onmousemove = mouseMove;
update();
