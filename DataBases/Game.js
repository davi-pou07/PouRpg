import Sequelize from 'sequelize'
import connection from "./database.js"

const Game = connection.define("game",{
   status:{
    type:Sequelize.BOOLEAN,
    allowNull:false
   },
   qtdPlayers:{
    type:Sequelize.INTEGER,
    allowNull:false
   },
   time:{
    type:Sequelize.STRING,
    allowNull:false
   },


})

// Game.sync({force:true}).then(()=>{
//     console.log("Tabela Game criada");
// }) 
export default Game