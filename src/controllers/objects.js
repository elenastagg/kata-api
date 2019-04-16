const objects = require('../lib/objects.js');

exports.createPerson = (req, res) => {
  const age = parseInt(req.query.age);
  res.status(200).json({ result: objects.createPerson(req.query.name, age) });
};

