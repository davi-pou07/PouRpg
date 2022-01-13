import Sequelize from "sequelize"

const connection = new Sequelize("d2sbattj4md0cv", "lxqzywdompfeld", "a3487595e8b57a5f1f3f13b116992304b0651b08f2d96659c3b45ba465d5b940", {
  host: "ec2-34-198-189-252.compute-1.amazonaws.com",
  dialect: "postgres",
  logging: true,
  timezone: "-03:00",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  }
})

export default connection 
