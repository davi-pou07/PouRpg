import express from "express";
import http from 'http'
import createGame from "./public/js/game.js";
import socketio from 'socket.io';

import Personagem from "./DataBases/Personagem.js";
import Cla from "./DataBases/Cla.js"
import Classe from "./DataBases/Classe.js";
import Fraqueza from "./DataBases/Fraqueza.js";
import Habilidade from "./DataBases/Habilidade.js";
import Item from "./DataBases/Item.js";
import Buff from "./DataBases/Buff.js";

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

var img = "./img/killer.png"

game.subscribe((command)=>{
    console.log(`Emitindo ${command.type}`)
    sockets.emit(command.type,command)
})

//var spriteSheet2 = "./img/img.png"

//game.addPlayer({id:"shet",img:spriteSheet2})


sockets.on('connection',async(socket)=>{
    const playerId = socket.id
    await game.addPlayer({id:playerId,img:img})

    sockets.emit(`setup`,game.state)

    socket.on("disconnect",()=>{
        console.log("disconnect")
        game.removePlayer({playerId:playerId})
    })

    socket.on("move-player",(command)=>{
        command.playerId = playerId
        command.type = 'move-player'
        game.movePlayer(command)
    })
})

server.listen(process.env.PORT || 3000,()=>{
    console.log('> Server on')
})