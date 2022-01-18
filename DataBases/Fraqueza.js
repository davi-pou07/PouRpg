import Sequelize from 'sequelize'
import connection from "./database.js"

const Fraqueza = connection.define("fraquezas",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    buff:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    typeBuff:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    buffSeting:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    tempo:{
        type:Sequelize.STRING,
        allowNull:false
    },
    disponivel:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    descricao:{
        type:Sequelize.TEXT,
        allowNull:false
    }

})

// Fraqueza.sync({force:true}).then(()=>{
//     console.log("Tabela Fraqueza criada");
// }) 
export default Fraqueza