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
    return {
        subscribe,
        registerPlayerId
    }
}
