import Sequelize from 'sequelize'
import connection from "./database.js"

const Personagem = connection.define("personagens",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    staus:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    foto:{
        type:Sequelize.STRING,
        allowNull:false
    },
    apelido:{
        type:Sequelize.STRING,
        allowNull:false
    },
    classeId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    claId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    habEspecialId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    poder1Id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    poder2Id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    poder3Id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    item1Id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    item2Id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    item3Id:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    fraquezaId:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    descricao:{
        type:Sequelize.TEXT,
        allowNull:false
    }

})

// Personagem.sync({force:true}).then(()=>{
//     console.log("Tabela Personagem criada");
// }) 
export default Personagem


