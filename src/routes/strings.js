const express = require('express');

const stringController = require('../controllers/strings');

const router = express.Router();

router.get('/hello/:string', stringController.hello);

router.get('/upper/:string', stringController.upper);

router.get('/lower/:string', stringController.lower);

router.get('/first-characters/:string', stringController.firstChar);

module.exports = router;
