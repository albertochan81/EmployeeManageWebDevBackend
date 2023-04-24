// register models, set up associations between tables, and generate barrel file for the models;

const Task  = require('./Task');
const Employee  = require('./employee');

Task.belongsTo(Employee);
Employee.hasMany(Task);

module.exports = {
  Task,
  Employee
};