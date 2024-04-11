const express = require('express');
const router = express.Router();
const timeSheetController = require('../controllers/TimeSheetController');

router.post('/timesheet-register',  timeSheetController.registerTimeSheet);

module.exports = router;
