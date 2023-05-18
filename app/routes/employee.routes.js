module.exports = app => {
    const employees = require("../controllers/employee.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Employee
    router.post("/", employees.create);
  
    // Retrieve all Employees
    router.get("/", employees.findAll);
  
    // Retrieve a single Employee with id
    router.get("/:id", employees.findOne);
  
    // Update a Employee with id
    router.put("/:id", employees.update);
  
    // Delete a Employee with id
    router.delete("/:id", employees.delete);
  
    // Delete all Employees
    router.delete("/", employees.deleteAll);
  
    app.use("/api/employees", router);
  };
  