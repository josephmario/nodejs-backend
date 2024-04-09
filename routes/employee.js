const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');

router.post('/register', employeeController.registerEmployee);
router.get('/view', employeeController.viewEmployee);

module.exports = router;
