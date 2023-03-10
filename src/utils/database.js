const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "foro",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1289",
  dialect: "postgres",
  logging: false, // ayuda a quitar todo los loggien de la consola 
});

module.exports = db;