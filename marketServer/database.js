const Sequelize = require("sequelize");

const connection = new Sequelize("db", "user", "pass", {
  host: "localhost",
  dialect: "sqlite",
  storate: "db.sqlite",
  define: {
    freezeTableName: true,
  },
});

const plan = connection.define("Plan", {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  mission: Sequelize.STRING,
  strengths: Sequelize.STRING,
  targets: Sequelize.STRING,
  goals: Sequelize.STRING,
});

module.exports = { connection, plan };
