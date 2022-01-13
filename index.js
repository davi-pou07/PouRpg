import express from "express";
import http from 'http'
import createGame from "./public/js/game.js";
import fs from 'fs';
import socketio from 'socket.io';

const app = express()
const server = http.createServer(app)
const sockets = socketio(server)

app.use(express.static("public"))

const game = createGame()
var spriteSheet = fs.readFileSync("./public/img/killer.png")
var spriteSheet2 = fs.readFileSync("./public/img/img.png")
game.addPlayer({id:"pou",img:spriteSheet})
//game.addPlayer({id:"shet",img:spriteSheet2})

sockets.on('connection',(socket)=>{
    const playerId = socket.id
    console.log(`console do socketId ${playerId}`)
    console.log(game.state)
    socket.emit(`setup`,game.state)
})

server.listen(3000,()=>{
    console.log('> Server on')
})