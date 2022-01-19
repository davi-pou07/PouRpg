import Sequelize from 'sequelize'
import connection from "./database.js"
import Classe from "./Classe.js"
import Cla from "./Cla.js"
import Habilidade from "./Habilidade.js"
import Fraqueza from "./Fraqueza.js"
import Imagem from "./Imagem.js"

const Personagem = connection.define("personagens",{
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    staus:{
        type:Sequelize.BOOLEAN,
        allowNull:false
    },
    apelido:{
        type:Sequelize.STRING,
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
    descricao:{
        type:Sequelize.TEXT,
        allowNull:false
    }

})
Personagem.belongsTo(Classe)
Personagem.belongsTo(Cla)
Personagem.belongsTo(Habilidade)
Personagem.belongsTo(Fraqueza)
Personagem.belongsTo(Imagem)

Personagem.sync({force:true}).then(()=>{
    console.log("Tabela Personagem criada");
}) 
export default Personagem


