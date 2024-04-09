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
