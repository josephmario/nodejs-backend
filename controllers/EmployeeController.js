const { response } = require('express');
const Employee = require('../models/Employee')

exports.registerEmployee = async (req, res) => {
    try {
        const { name, designation, email, phone, age } = req.body;
        const employee = new Employee({ name, designation, email, phone, age });
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.viewEmployee = async (req, res) => {
    try{
        Employee.find()
        .then(response => {
            res.json({
                response
            })
        })
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    
};

exports.detailsEmployee = async (req, res) => {
    try{
        const { employeeID } = req.body  
        Employee.findById(employeeID)
        // Employee.find()
        .then(response => {
            res.json({
                response
            })
        })
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    
};

exports.updateEmployee = async (req, res) => {
    try{
        const { employeeID, name, designation, email, phone, age } = req.body  
        const updateData = {
            name: name, designation: designation, email: email, phone:phone, age:age
        }
        Employee.findByIdAndUpdate(employeeID, {$set: updateData})
        // Employee.find()
        .then(response => {
            res.json({
                response
            })
        })
    }catch(error){
        res.status(400).json({ message: error.message });
    }
    
};

