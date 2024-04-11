const express = require('express');
const router = express.Router();
const clientController = require('../controllers/ClientController');

router.post('/client-register',  clientController.registerClient);
router.get('/client-view',  clientController.viewClient);
router.post('/client-details',  clientController.detailsClient);
router.post('/clinet-update',  clientController.updateClient);

module.exports = router;
