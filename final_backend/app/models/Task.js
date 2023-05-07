const Sequelize = require('sequelize');
const db = require('../config/database');

const Task = db.define('task',{
    description: {
        type: Sequelize.STRING
    },
    priority_level: {
        type: Sequelize.STRING
    },
    completition_stat: {
        type: Sequelize.BOOLEAN
    }, 
    emp_id: {
        type: Sequelize.INTEGER
    },

})
// added extra
console.log(Task === db.models.Task); 

module.exports = Task;
