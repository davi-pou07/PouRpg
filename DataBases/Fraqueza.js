import Sequelize from 'sequelize'
import connection from "./database.js"
import Buff from "./Buff.js"

const Fraqueza = connection.define("fraquezas",{
    nome:{
        type:Sequelize.STRING,
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

Fraqueza.belongsTo(Buff)
// Fraqueza.sync({force:true}).then(()=>{
//     console.log("Tabela Fraqueza criada");
// }) 
export default Fraqueza