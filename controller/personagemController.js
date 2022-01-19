import express from "express"
const router = express.Router()
import { Op } from "sequelize"


router.get("/admin",(req,res)=>{
    res.render("admin")
})



export { router as personagemController }