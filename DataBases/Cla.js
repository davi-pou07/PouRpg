import Sequelize from 'sequelize'
import connection from "./database.js"

const Cla = connection.define("clas",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type:Sequelize.TEXT,
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
    isLendaria:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    }

})

// Cla.sync({force:true}).then(()=>{
//     console.log("Tabela Cla criada");
// }) 
export default Cla