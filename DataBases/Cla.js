import Sequelize from 'sequelize'
import connection from "./database.js"
import Buff from "./Buff.js"


const Cla = connection.define("clas",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricao:{
        type:Sequelize.TEXT,
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

Cla.belongsTo(Buff)


// Cla.sync({force:true}).then(()=>{
//     console.log("Tabela Cla criada");
// }) 
export default Cla