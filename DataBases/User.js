import Sequelize from 'sequelize'
import connection from "./database.js"

const User = connection.define("users",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    login:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    isLendario:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    personLendarioId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    isAdmin:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },status:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },foto:{
        type:Sequelize.STRING,
        allowNull:false
    }

})

// User.sync({force:true}).then(()=>{
//     console.log("Tabela User criada");
// }) 
export default User