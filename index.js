import express from "express";
import http from 'http'
import createGame from "./public/js/game.js";
import socketio from 'socket.io';
import {Questionario} from './controller/Questionario.js'
import bodyParser from "body-parser";

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }))
app.use(bodyParser.json({ limit: '50mb' }))

app.use(express.static("public"))
app.set('view engine', 'ejs')

app.use("/",Questionario)
const game = createGame()

var spriteSheet = "./img/killer.png"
var spriteSheet2 = "./img/img.png"
//game.addPlayer({id:"pou",img:spriteSheet})
//game.addPlayer({id:"shet",img:spriteSheet2})
var jogadores = [{id:"pou",img:spriteSheet},{id:"shet",img:spriteSheet2}]
game.state.players[jogadores[0].id] = jogadores[0]
game.state.players[jogadores[1].id] = jogadores[1]





sockets.on('connection',(socket)=>{
    const playerId = socket.id
    console.log(`console do socketId ${playerId}`)
    console.log(game.state)
    socket.emit(`state`,game.state)
})

server.listen(3000,()=>{
    console.log('> Server on')
})