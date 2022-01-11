const express = require("express")
const app = express()
const session = require("express-session")
const bodyParser = require("body-parser")
const { Op } = require("sequelize");
//databases
const path = require('path')
const PORT = process.env.PORT || 3000

const PersonQuest = require("./DataBases/PersonQuest")

app.use(session({
    secret: "sdfsdfsdfgdfgfgh",
    cookie: { maxAge: 3600000 }
}))

//usar o EJS como view engine | renderizador de html
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
//Carregamento de arquivos estaticos no express
app.use(express.static(path.join(__dirname, 'public')))
//Carregamento do bodyPerser
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }))
app.use(bodyParser.json({ limit: '50mb' }))


app.get("/", (req, res) => {
    var erro = 0
   res.render("index",{erro:erro})
})
app.post("/personagem",async (req,res)=>{
    var {nome,apelido,classe,descClasse,cla,descCla,habEsp,descHab,fraqueza,descFraq,observacao} = req.body
    console.log(req.body)
    if (nome != undefined && nome != '' && apelido != undefined && apelido != '' &&  classe != undefined && classe != '' &&  cla != undefined && cla != '' &&  habEsp != undefined && habEsp != '' && fraqueza != undefined && fraqueza != '') {
       var  igual = await PersonQuest.findOne({where:{[Op.or]:[{nome:nome},{apelido:apelido},{poder:habEsp}]}})
       if (igual == undefined) {

           PersonQuest.create({
            nome:nome,
            apelido:apelido,
            classe:classe,
            descricaoClasse:descClasse,
            cla:cla,
            descricaoCla:descCla,
            poder:habEsp,
            descricaoPoder:descHab,
            fraqueza:fraqueza,
            descricaofraqueza:descFraq,
            observacao:observacao
           }).then(criado =>{
               res.render("sucesso")
           }).catch(erro =>{
               res.render("index",{erro:erro})
           })
       } else {
           var erro= "Ja existe um personagem com esse (nome,apelido,habilidade especial)"
            res.render("index",{erro:erro})
       }
    } else {
        var erro= "Campo obrigatorio está vazio"
        res.render("index",{erro:erro})
    }
})

app.listen(PORT, async() => {
    console.log("Servidor ligado")
})