const Sequelize = require("sequelize")

const connection = new Sequelize("pourpg","postgres","dh*80335",{
    host:"localhost",
    dialect:"postgres",
    logging: true,
})



  module.exports = connection