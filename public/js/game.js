export default function createGame() {
    const state = {
        players: {},
        screen:{
            width:800,
            height:600
        }
    }

    function addPlayer(command) {
        const player = new Personagem(command.id,command.img, 0, 0, 360, 360, 32, 48, 1)
        state.players[player.id] = player
    }

    function removePlayer(command) {
        const playerId = command
        delete state.players[playerId]
    }



    function movePlayer(command) {

        const acceptedMoves = {
            ArrowRight(player) {
                player.mvRight = true;
                player.mvLeft = false;
                player.mvUp = false;
                player.mvDown = false;
                player.move()
            },
            ArrowLeft(player) {
                player.mvRight = false;
                player.mvLeft = true;
                player.mvUp = false;
                player.mvDown = false;
                player.move()
            },
            ArrowUp(player) {
                player.mvRight = false;
                player.mvLeft = false;
                player.mvUp = true;
                player.mvDown = false;
                player.move()
            },
            ArrowDown(player) {
                player.mvRight = false;
                player.mvLeft = false;
                player.mvUp = false;
                player.mvDown = true;
                player.move()
            }
        }

        const keyPressed = command.keyPressed
        const player = state.players[command.playerId]
        const moveFunction = acceptedMoves[keyPressed]
        if (player && moveFunction) {
            moveFunction(player)
        }

        var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
        window.addEventListener("keyup", keyupHandler, false);
        function keyupHandler(e) {
            switch (e.keyCode) {
                case RIGHT:
                    player.mvRight = false;
                    break;
                case LEFT:
                    player.mvLeft = false;
                    break;
                case UP:
                    player.mvUp = false;
                    break;
                case DOWN:
                    player.mvDown = false;
                    break;
            }
        }
    }
    return {
        addPlayer,
        removePlayer,
        movePlayer,
        state
    }

    function Personagem(id,img, srcX, srcY, posX, posY, width, height, speed) {
    this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;
    this.srcX = srcX
    this.id = id
    this.srcY = srcY;
    //Posição no canvas onde a figura será exibida
    this.posX = posX
    this.posY = posY;
    this.width = width//32;
    this.height = height//48;
    this.speed = speed//1;
    this.img = img;
    this.countAnim = 0;

    this.draw = function (ctx) {
        ctx.drawImage(this.img,	//Imagem de origem
            //Captura da imagem
            this.srcX,	//Origem da captura no eixo X
            this.srcY,	//Origem da captura no eixo Y
            this.width,	//Largura da imagem que será capturada
            this.height,//Altura da imagem que será capturada
            //Exibição da imagem
            this.posX,	//Posição no eixo X onde a imagem será exibida 
            this.posY,	//Posição no eixo Y onde a imagem será exibida 
            this.width,	//Largura da imagem a ser exibida 
            this.height	//Altura da imagem a ser exibida 
        );
        this.animation()
    }

    this.move = function (keyPressed) {
        if (this.mvRight) {
            //if this.posx += this.speed > screen.whidt
            this.posX += this.speed;
            this.srcY = this.height * 2;
        } else
            if (this.mvLeft) {
                this.posX -= this.speed;
                this.srcY = this.height * 1;
            } else
                if (this.mvUp) {
                    this.posY -= this.speed;
                    this.srcY = this.height * 3;
                } else
                    if (this.mvDown) {
                        this.posY += this.speed;
                        this.srcY = this.height * 0;
                    }
    }

    this.animation = function () {
        if (this.mvLeft || this.mvUp || this.mvRight || this.mvDown) {
            //Caso qualquer seta seja pressionada, o contador de animação é incrementado
            this.countAnim++;
            if (this.countAnim >= 20) {
                this.countAnim = 0;
            }
            this.srcX = Math.floor(this.countAnim / 5) * this.width;
        } else {
            //Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
            this.srcX = 0;
            this.countAnim = 0;
        }
    }
}
}

