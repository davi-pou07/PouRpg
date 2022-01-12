window.onload = function(){
	//Constantes que armazenam o código de cada seta do teclado
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
	
	var cnv = document.querySelector("canvas");
	var	ctx = cnv.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.src = "../public/img/killer.png";
	var scene = new Image();
	scene.src = "../public/img/land.jpg"
   
//https://stackoverflow.com/questions/9880279/how-do-i-add-a-simple-onclick-event-handler-to-a-canvas-element

	var zezim = new Sprite(spriteSheet);
	window.addEventListener("keydown",keydownHandler,false);
	window.addEventListener("keyup",keyupHandler,false);
	
	function keydownHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezim.mvRight = true;
				zezim.mvLeft = false;
				zezim.mvUp = false;
				zezim.mvDown = false;
				break;
			case LEFT:
				zezim.mvRight = false;
				zezim.mvLeft = true;
				zezim.mvUp = false;
				zezim.mvDown = false;
				break;
			case UP:
				zezim.mvRight = false;
				zezim.mvLeft = false;
				zezim.mvUp = true;
				zezim.mvDown = false;
				break;
			case DOWN:
				zezim.mvRight = false;
				zezim.mvLeft = false;
				zezim.mvUp = false;
				zezim.mvDown = true;
				break;
		}
	}
	
	function keyupHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezim.mvRight = false;
				break;
			case LEFT:
				zezim.mvLeft = false;
				break;
			case UP:
				zezim.mvUp = false;
				break;
			case DOWN:
				zezim.mvDown = false;
				break;
		}
	}
	
	//Quano a imagem é carregada, o programa é iniciado
	spriteSheet.onload = function(){
		init();
		zezim.posX = zezim.posY = 360;
	}

	function init(){
		loop();
	}

	function update(){
		zezim.move();
	}
	var circle = new Path2D()
	ctx.fillStyle = 'red';
	cnv.addEventListener('click', function(event) {
		// Check whether point is inside circle
		if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
			alert("Passou em cima do zezim")
		}
		
	  });
	
	function draw(){
		ctx.clearRect(0,0,cnv.width,cnv.height);
		ctx.drawImage(	scene,	//Imagem de origem
		 	//Captura da imagem
			0,	//Origem da captura no eixo X
			0,	//Origem da captura no eixo Y
		 	scene.width,	//Largura da imagem que será capturada
		 	scene.height,//Altura da imagem que será capturada
		 	//Exibição da imagem
		 	0,	//Posição no eixo X onde a imagem será exibida 
		 	0,	//Posição no eixo Y onde a imagem será exibida 
		 	cnv.width,	//Largura da imagem a ser exibida 
		 	cnv.height	//Altura da imagem a ser exibida 
		);

		
		ctx.fillRect(zezim.posX)
		circle.arc(zezim.posX,zezim.posY,50,0,2*Math.PI)
		zezim.draw(ctx);
		
	}

	function loop(){
		window,requestAnimationFrame(loop,cnv);
		update();
		draw();
	}
}
