import Sequelize from 'sequelize'
import connection from "./database.js"

const Item = connection.define("items",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    buff:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    buffId:{
        type:Sequelize.INTEGER,
        allowNull:true
    },
    tempo:{
        type:Sequelize.STRING,
        allowNull:false
    },
    disponivel:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    isUnic:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    descricao:{
        type:Sequelize.TEXT,
        allowNull:false
    }

})

// Item.sync({force:true}).then(()=>{
//     console.log("Tabela Item criada");
// }) 
export default Item