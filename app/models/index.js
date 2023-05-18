const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = require("./Employee.js")(sequelize, Sequelize);
db.tasks = require("./task.js")(sequelize, Sequelize);

db.employees.hasMany(db.tasks, { as: "tasks" });
db.tasks.belongsTo(db.employees, {
  foreignKey: "employeeId",
  as: "employee",});

module.exports = db;
