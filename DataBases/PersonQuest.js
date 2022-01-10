const Sequelize = require('sequelize')
const connection = require("./database")

const PersonQuest = connection.define("personquest",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    apelido:{
        type:Sequelize.STRING,
        allowNull:false
    },
    classe:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricaoClasse:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    cla:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricaoCla:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    poder:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricaoPoder:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    fraqueza:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricaofraqueza:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    observacao:{
        type:Sequelize.TEXT,
        allowNull:false
    }

})

PersonQuest.sync({force:true}).then(()=>{
    console.log("Tabela PersonQuest criada");
}) 
module.exports = PersonQuest


