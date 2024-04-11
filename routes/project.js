const express = require('express');
const router = express.Router();
const projectController = require('../controllers/ProjectController');

router.post('/project-register',  projectController.registerProject);
router.get('/project-view',  projectController.viewProject);
router.post('/project-details',  projectController.detailsProject);
router.post('/project-update',  projectController.updateProject);

module.exports = router;
