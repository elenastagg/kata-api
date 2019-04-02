const numbers = require('../lib/numbers.js');

exports.addAB = (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.add(a, b) });
  }
};

exports.subtractAB = (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);
  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.subtract(a, b) });
  }
};

exports.multiplyAB = (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.multiply(a, b) });
  }
};

exports.divideAB = (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.divide(a, b) });
  }
};

exports.remainderAB = (req, res) => {
  const aQuery = parseInt(req.query.a, 10);
  const bQuery = parseInt(req.query.b, 10);
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (typeof req.query.a !== 'undefined' || typeof req.query.b !== 'undefined') {
    res.status(200).json({ result: numbers.remainder(aQuery, bQuery) });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (typeof req.body.a === 'undefined' || typeof req.body.b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: numbers.remainder(a, b) });
  }
};
