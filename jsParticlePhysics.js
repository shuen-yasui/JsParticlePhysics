class Particle {
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.radius=5;
		this.alpha=1;
	}
	update(){
		c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
    c.strokeStyle = 'rgba(255, 255, 255, '+this.alpha+')';
    c.stroke();
    c.fillStyle = "black";
    c.fill();
    c.closePath();
		this.alpha-=0.01;
	}
}
function update(){
  c.clearRect(0,0,window.innerWidth,window.innerHeight);
	posRadians+=0.01;
	for(var i=0;i<particleCnt;i++){
		var thisRadians=((i/(particleCnt))*Math.PI*2);
		var delta_x = centerParticleX - mouseX;
		var delta_y = centerParticleY - mouseY;
		var theta_radians = Math.atan2(delta_y, delta_x);
		var hypOri = Math.hypot(delta_x,delta_y);
		var hypNew = 0;
		if(hypOri>1){
			hypNew=hypOri*0.995;
		}
		centerParticleY = (hypNew*Math.sin(theta_radians))+mouseY;
		centerParticleX = (hypNew*Math.cos(theta_radians))+mouseX;
		var x=centerParticleX + (pathRadius * (Math.cos(thisRadians+posRadians)));
		var y=centerParticleY + (pathRadius * (Math.sin(thisRadians+posRadians)));
	  particles.push(new Particle(x,y));
	}
  i=0;
  while(i<particles.length){
    particles[i].update();
		if(particles[i].alpha<0){
			particles.splice(i,1);
			continue;
		}
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
var particleCnt=5;
var canvas = document.querySelector('canvas');
var velocity=0.02;
var pathRadius=50;
var posRadians=1;
var centerParticleX = 0;
var centerParticleY = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
canvas.onmousemove = mouseMove;
update();
