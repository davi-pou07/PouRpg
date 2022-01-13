import express from "express"
const router = express.Router()
import PersonQuest from '../DataBases/PersonQuest.js'
import { Op } from "sequelize"

router.get("/questionario",(req,res)=>{
    var erro = 0
    res.render("personQuest",{erro:erro})
})

router.post("/personagem",async (req,res)=>{
    console.log(req.body)
    var {nome,apelido,classe,descClass,cla,descCla,habEsp,descHab,fraqueza,descFraq,observacao} = req.body
    if (nome != undefined && nome != '' && apelido != undefined && apelido != '' &&  classe != undefined && classe != '' &&  cla != undefined && cla != '' &&  habEsp != undefined && habEsp != '' && fraqueza != undefined && fraqueza != '') {
       var  igual = await PersonQuest.findOne({where:{[Op.or]:[{nome:nome},{apelido:apelido},{poder:habEsp}]}})
       if (igual == undefined) {

           PersonQuest.create({
            nome:nome,
            apelido:apelido,
            classe:classe,
            descricaoClasse:descClass,
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
               res.render("personQuest",{erro:erro})
           })
       } else {
           var erro= "Ja existe um personagem com esse (nome,apelido,habilidade especial)"
            res.render("personQuest",{erro:erro})
       }
    } else {
        var erro= "Campo obrigatorio está vazio"
        res.render("personQuest",{erro:erro})
    }
})

router.get("/cadastros",(req,res)=>{
    PersonQuest.findAll().then(personagens =>{
        res.json(personagens)
    })
})

export { router as Questionario }