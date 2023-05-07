const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Employee = require ('../models/employee')


// /route
//router.get('/', (req, res) => res.sendStatus(200));

//Get employee list
// /route   (request,response)
router.get('/', (req, res) => 
    Employee.findAll()
    .then( employees => {
        console.log(employees);
        res.sendStatus(200);  
    })
    .catch(err => console.log(err)));

    //Add a employee
    router.get('/add',(req, res) => {
        const data ={
            first_name:'Jose',
            last_name: 'Rojas',
            department: 'CS',
        }
    

    let {first_name, last_name, department} = data;

    //Insert into table 
    Employee.create ({
        first_name,
        last_name,
        department,
    })
    .then(employee => res.redirect('/employees'))
    .catch(err => console.log(err));
});

module.exports = router; 