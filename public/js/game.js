export default function createGame() {

    class Personagem {
        constructor(id, img, srcX, srcY, posX, posY, width, height, speed) {
            this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;
            this.srcX = srcX;
            this.id = id;
            this.srcY = srcY;
            //Posição no canvas onde a figura será exibida
            this.posX = posX;
            this.posY = posY;
            this.width = width; //32;
            this.height = height; //48;
            this.speed = speed; //1;
            this.img = img;
            this.countAnim = 0;
        }
    }
    

    function move(player,keyPressed) {
        if (player.mvRight) {
            //if player.posx += player.speed > screen.whidt
            player.posX += player.speed;
            player.srcY = player.height * 2;
        } else
            if (player.mvLeft) {
                player.posX -= player.speed;
                player.srcY = player.height * 1;
            } else
                if (player.mvUp) {
                    player.posY -= player.speed;
                    player.srcY = player.height * 3;
                } else
                    if (player.mvDown) {
                        player.posY += player.speed;
                        player.srcY = player.height * 0;
                    }
    }


    const state = {
        players: {},
        screen:{
            width:800,
            height:600
        }
    }
    function setState(newState) {
        Object.assign(state,newState)
    }
    
    async function addPlayer(command) {
        if(command.posX == undefined){
            command.posX = Math.floor(Math.random() * state.screen.width) 
            command.posY = Math.floor(Math.random() * state.screen.height) 
            console.log(command)
        }
        const player = await new Personagem(command.id,command.img,0,0,command.posX,command.posY,32,48,1)
        state.players[player.id] = await player

        notifyAll({
            type:'add-player',
            id:player.id,
            img:player.img,
        })
    }

    function removePlayer(command) {
        console.log("command remove")
        const playerId = command.playerId
        delete state.players[playerId]
        notifyAll({
            type:"remove-player",
            playerId:playerId
        })
    }

    var observers = []

    function subscribe(observersFunction) {
        observers.push(observersFunction)
    }

    function notifyAll(command) {
        console.log(`Notificando ${observers.length} observers`)
        for (const observerFunction of observers) {
            observerFunction(command)
        }
    }


    function movePlayer(command) {
        console.log(command)
        notifyAll(command)
        const acceptedMoves = {
            ArrowRight(player) {
                player.mvRight = true;
                player.mvLeft = false;
                player.mvUp = false;
                player.mvDown = false;
                move(player)
            },
            ArrowLeft(player) {
                player.mvRight = false;
                player.mvLeft = true;
                player.mvUp = false;
                player.mvDown = false;
                move(player)
            },
            ArrowUp(player) {
                player.mvRight = false;
                player.mvLeft = false;
                player.mvUp = true;
                player.mvDown = false;
                move(player)
            },
            ArrowDown(player) {
                player.mvRight = false;
                player.mvLeft = false;
                player.mvUp = false;
                player.mvDown = true;
                move(player)
            }
        }

        const keyPressed = command.keyPressed
        const player = state.players[command.playerId]
        const moveFunction = acceptedMoves[keyPressed]
        if (player && moveFunction) {
            moveFunction(player)
        }

        /*var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
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
        */
    }
    return {
        addPlayer,
        removePlayer,
        movePlayer,
        setState,
        subscribe,
        Personagem,
        state
    }

}

