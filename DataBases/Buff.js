import Sequelize from 'sequelize'
import connection from "./database.js"

const Buff = connection.define("buffs",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    type:{
        type:Sequelize.STRING,
        allowNull:false
    },
    efeito:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    seting:{
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
    isLendaria:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    }

})

// Buff.sync({force:true}).then(()=>{
//     console.log("Tabela Buff criada");
// }) 
export default Buff