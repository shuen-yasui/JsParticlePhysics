class Particle {
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.radius=5;
		this.alpha=1;
	}
	update(){
		// Draw new particle
		c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
    c.strokeStyle = 'rgba(255, 255, 255, '+this.alpha+')';
    c.stroke();
    c.fillStyle = "black";
    c.fill();
    c.closePath();
		// Speed of particle fades out
		this.alpha-=0.015;
	}
}
function update(){
	// Clear screen
  c.clearRect(0,0,window.innerWidth,window.innerHeight);
	// Speed particle rotates around mouse
	posRadians+=0.017;
	// Create particleCnt number of particles
	for(var i=0;i<particleCnt;i++){
		var radianPositionInOrbit=((i/(particleCnt))*Math.PI*2);
		var delta_x = centerParticleX - mouseX;
		var delta_y = centerParticleY - mouseY;
		var radiansOfDelta = Math.atan2(delta_y, delta_x);
		var hypotOfDelta = Math.hypot(delta_x,delta_y);
		var hypotToMoveTo = 0;
		// Caluclate Move distance towards mouse, % of distance
		if(hypotOfDelta>1){
			hypotToMoveTo=hypotOfDelta*0.995;
		}
		// Calculate x and y center of orbit
		centerParticleY = (hypotToMoveTo*Math.sin(radiansOfDelta))+mouseY;
		centerParticleX = (hypotToMoveTo*Math.cos(radiansOfDelta))+mouseX;
		// Calculate x and y of particle
		var x=centerParticleX + (pathRadius * (Math.cos(radianPositionInOrbit+posRadians)));
		var y=centerParticleY + (pathRadius * (Math.sin(radianPositionInOrbit+posRadians)));
	  particles.push(new Particle(x,y));
	}
  i=0;
	// Update all particles
  while(i<particles.length){
    particles[i].update();
		// Remove particle if invisible
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
var pathRadius=50;
var posRadians=1;
var centerParticleX = 0;
var centerParticleY = 0;
// Initialize Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
canvas.onmousemove = mouseMove;
update();
