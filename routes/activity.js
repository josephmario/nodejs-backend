const express = require('express');
const router = express.Router();
const activityController = require('../controllers/ActivityController');

router.post('/activity-register', activityController.registerActivity);
router.get('/activity-view', activityController.viewActivity);
router.post('/activity-details', activityController.detailsActivity);
router.post('/activity-update', activityController.updateActivity);

module.exports = router;
