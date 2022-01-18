import Sequelize from 'sequelize'
import connection from "./database.js"

const Classe = connection.define("classes",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    vida:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    dano:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    defesa:{
        type:Sequelize.INTEGER,
        allowNull:false
    },velocidade:{
        type:Sequelize.INTEGER,
        allowNull:false
    },distancia:{
        type:Sequelize.INTEGER,
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
    isHigth:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    descricao:{
        type:Sequelize.TEXT,
        allowNull:false
    }

})

// Classe.sync({force:true}).then(()=>{
//     console.log("Tabela Classe criada");
// }) 
export default Classe