const express = require('express');
const booleansController = require('../controllers/booleans.js');

const router = express.Router();

router.post('/negate', booleansController.negate);
router.post('/truthiness', booleansController.truthiness);
router.get('/is-odd/:a', booleansController.isOdd);
router.get('/:string/starts-with/:char', booleansController.startsWith);

module.exports = router;
