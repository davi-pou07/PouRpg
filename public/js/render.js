var map = new Image()
map.src = './img/land.jpg'

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
        console.log(player)
        player.draw(context)
    }

    requestAnimationFrame(()=>{
        renderScreen(screen,game,requestAnimationFrame)
    })
}
