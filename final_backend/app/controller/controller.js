const db = require("../models");
const Employees = db.Employee;
const Tasks = db.Task;
const Op = db.Sequelize.Op;
///
const Task = require ('../models/Task')
const Employee = require ('../models/employee')

// Create and Save a new Tutorial
exports.createEmployee = (employee) => {
    return Employee.create({
        first_name: employee.first_name,
        last_name: employee.last_name,
        department: employee.department,
      })
        .then((tutorial) => {
          console.log(">> Created employee: " + JSON.stringify(employee, null, 4));
          return employee;
        })
        .catch((err) => {
          console.log(">> Error while creating employee: ", err);
        });

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
/*
create a new Tutorial: create(object)
find a Tutorial by id: findByPk(id)
get all Tutorials: findAll()
update a Tutorial by id: update(data, where: { id: id })
remove a Tutorial: destroy(where: { id: id })
remove all Tutorials: destroy(where: {})
find all Tutorials by title: findAll({ where: { title: ... } })
*/