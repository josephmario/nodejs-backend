const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', authMiddleware, employeeController.registerEmployee);
router.get('/view', authMiddleware, employeeController.viewEmployee);
router.post('/details', authMiddleware, employeeController.detailsEmployee);
router.post('/update', authMiddleware, employeeController.updateEmployee);

module.exports = router;
