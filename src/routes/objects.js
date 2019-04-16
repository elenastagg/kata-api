const express = require('express');
const objectsController = require('../controllers/objects.js');

const router = express.Router();

router.get('/create-person', objectsController.createPerson);

module.exports = router;
