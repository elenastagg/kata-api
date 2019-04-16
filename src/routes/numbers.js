const express = require('express');
const numbersController = require('../controllers/numbers.js');

const router = express.Router();

router.get('/add/:a/and/:b', numbersController.addAB);

router.get('/subtract/:b/from/:a', numbersController.subtractAB);

router.post('/multiply', numbersController.multiplyAB);

router.post('/divide', numbersController.divideAB);

router.post('/remainder', numbersController.remainderAB);

module.exports = router;
