var particle = function(){
	this.x = Math.random()*w;
	this.y = Math.random()*3*h-h;
	this.d = Math.random()*(size-2)*2 + 2;
	// Função para desenhar a partícula
	this.draw = function() {
		ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // Opacidade reduzida para 0.1
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.d, 0, 2*Math.PI);
		ctx.fill();
	}
	// Função para atualizar a partícula
	this.update = function() {
		if(this.d < size) {
			this.x += (1/3)*(this.d-size)*(this.d-size);
		}else{
			this.x -= (1/3)*(this.d-size)*(this.d-size);
		}
		if(this.x < -50 || this.x > w+50) {
			this.d = size*2 - this.d;
		}
	}
}

function draw() {
	// Mudança aqui para a cor de fundo: #111111
	ctx.fillStyle = "#111111"; // Define a cor de fundo para #111111
	ctx.fillRect(-w,-h,3*w,3*h);
	ctx.translate(w/2,h/2);
	ctx.rotate(0.004);
	ctx.translate(-w/2,-h/2);
	for(var i=0; i<particles.length; i++) {
		particles[i].draw();
		particles[i].update();
	}
	window.requestAnimationFrame(draw);
}

var cnv = document.getElementById("c");
var ctx = cnv.getContext("2d");
var w = cnv.width = window.innerWidth;
var h = cnv.height = window.innerHeight;
var z = Math.sqrt(h * h + w * w);

var particles = [];
var particleCount = 2000;
var size = 5;

for(var i=0; i < particleCount; i++) {
	particles.push(new particle());
}

ctx.fillStyle = "rgba(255,255,255,0.3)";
draw();

window.addEventListener('resize', function() {
	w = cnv.width = window.innerWidth;
	h = cnv.height = window.innerHeight;
});
