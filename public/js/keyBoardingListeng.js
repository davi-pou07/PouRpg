export default function createKeyboardListener(document) {

    const state = {
        observers: [],
        playerId:null
    }

    function  registerPlayerId(playerId) {
        state.playerId = playerId
    }

    function subscribe(observersFunction) {
        state.observers.push(observersFunction)
    }

    function notifyAll(command) {
        console.log(`Notificando ${state.observers.length} observers`)
        for (const observerFunction of state.observers) {
            observerFunction(command)
        }
    }

    window.addEventListener("keydown", keydownHandler, false);

    function keydownHandler(e) {
        const keyPressed = e.code

        const command = {
            type:'move-player',
            playerId: state.playerId,
            keyPressed
        }
        notifyAll(command)

    }
/*
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    window.addEventListener("keyup", keyupHandler, false);
    function keyupHandler(e) {
        switch (e.keyCode) {
            case ArrowRight:
                player.mvRight = false;
                break;
            case LEFT:
                player.mvLeft = false;
                break;
            case ArrowUp:
                player.mvUp = false;
                break;
            case ArrowDown:
                player.mvDown = false;
                break;
        }
    }
*/

    return {
        subscribe,
        registerPlayerId
    }
}
