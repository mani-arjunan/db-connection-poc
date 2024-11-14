const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
  logging: (msg) => console.log(msg),
  port: 54321,
  pool: {
    max: 10,
    min: 3,
  },
});

module.exports = sequelize;
