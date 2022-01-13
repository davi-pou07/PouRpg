export default function createKeyboardListener(document) {

    const state = {
        observers: []
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
            playerId: 'pou',
            keyPressed
        }
        notifyAll(command)

    }
    return {
        subscribe
    }
}
