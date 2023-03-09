const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "foro",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1289",
  dialect: "postgres",
});

module.exports = db;