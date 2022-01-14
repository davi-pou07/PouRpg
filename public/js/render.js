var map = new Image()
map.src = './img/land.jpg'

function draw(player,ctx) {
    ctx.drawImage(player.img,	//Imagem de origem
        //Captura da imagem
        player.srcX,	//Origem da captura no eixo X
        player.srcY,	//Origem da captura no eixo Y
        player.width,	//Largura da imagem que será capturada
        player.height,//Altura da imagem que será capturada
        //Exibição da imagem
        player.posX,	//Posição no eixo X onde a imagem será exibida 
        player.posY,	//Posição no eixo Y onde a imagem será exibida 
        player.width,	//Largura da imagem a ser exibida 
        player.height	//Altura da imagem a ser exibida 
    );
    animation(player)
}

function animation(player){
    if (player.mvLeft || player.mvUp || player.mvRight || player.mvDown) {
        //Caso qualquer seta seja pressionada, o contador de animação é incrementado
        player.countAnim++;
        if (player.countAnim >= 20) {
            player.countAnim = 0;
        }
        player.srcX = Math.floor(player.countAnim / 5) * player.width;
    } else {
        //Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
        player.srcX = 0;
        player.countAnim = 0;
    }
}

export default function renderScreen(screen,game,requestAnimationFrame) {
    const context = screen.getContext("2d");
    context.clearRect(0, 0, screen.width, screen.height);

    context.drawImage(map,	//Imagem de origem
        //Captura da imagem
        0,	//Origem da captura no eixo X
        0,	//Origem da captura no eixo Y
        map.width,	//Largura da imagem que será capturada
        map.height,//Altura da imagem que será capturada
        //Exibição da imagem
        0,	//Posição no eixo X onde a imagem será exibida 
        0,	//Posição no eixo Y onde a imagem será exibida 
        screen.width,	//Largura da imagem a ser exibida 
        screen.height	//Altura da imagem a ser exibida 
    );

    for (const playerId in game.state.players) {
        const player = game.state.players[playerId]
        //console.log(player)
        draw(player,context)
    }

    requestAnimationFrame(()=>{
        renderScreen(screen,game,requestAnimationFrame)
    })
}
