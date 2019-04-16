const booleans = require('../lib/booleans.js');

exports.negate = (req, res) => {
  res.status(200).json({ result: booleans.negate(req.body.value) });
};

exports.truthiness = (req, res) => {
  res.status(200).json({ result: booleans.truthiness(req.body.value) });
};

exports.isOdd = (req, res) => {
  const a = parseInt(req.params.a);
  if (isNaN(req.params.a)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: booleans.isOdd(a) });
  }
};

exports.startsWith = (req, res) => {
  const char = req.params.char;
  if (char.length !== 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: booleans.startsWith(req.params.char, req.params.string) });
  }
};
