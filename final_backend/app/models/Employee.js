const Sequelize = require('sequelize');
const db = require('../config/database');

const Employee = db.define('employee',{
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    department: {
        type: Sequelize.STRING
    }, 

})
// added extra
console.log(Employee === db.models.Employee); 
console.log(Employee);
console.log(db.Employee);

module.exports = Employee;
