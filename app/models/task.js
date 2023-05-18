module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  priority_level: {
    type: Sequelize.STRING
  },

  completition_stat: {
    type: Sequelize.BOOLEAN
  },

});

    return Task;
}

