import Sequelize from 'sequelize'
import connection from "./database.js"

const Imagem = connection.define("imagens",{
    src:{
        type:Sequelize.STRING,
        allowNull:false
    },
    srcX:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    srcY:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    width:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    height:{
        type:Sequelize.STRING,
        allowNull:false
    }

})

// Imagem.sync({force:true}).then(()=>{
//     console.log("Tabela Imagem criada");
// }) 
export default Imagem