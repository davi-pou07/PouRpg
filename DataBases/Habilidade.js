import Sequelize from 'sequelize'
import connection from "./database.js"

const Habilidade = connection.define("habilidades",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    isEpecial:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    dano:{
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
    distancia:{
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

// Habilidade.sync({force:true}).then(()=>{
//     console.log("Tabela Habilidade criada");
// }) 
export default Habilidade