const Sequelize = require("sequelize");

const connection = new Sequelize("db", "user", "pass", {
  host: "localhost",
  dialect: "sqlite",
  storate: "db.sqlite",
  define: {
    freezeTableName: true,
  },
});

const getArrayDefinition = (key) => {
  return {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return this.getDataValue(key).split(";");
    },
    set(val) {
      this.setDataValue(key, (val || []).join(";"));
    },
  };
};

const plan = connection.define("Plan", {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  mission: Sequelize.STRING,
  strengths: getArrayDefinition("strengths"),
  targets: getArrayDefinition("targets"),
  goals: getArrayDefinition("goals"),
  userKey: Sequelize.STRING,
});

const user = connection.define("User", {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  userKey: Sequelize.STRING,
});

module.exports = { connection, plan, user };
