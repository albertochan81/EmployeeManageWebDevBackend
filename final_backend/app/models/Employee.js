module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      }
    });
  
    return Employee;
  };
  
  