const strings = require('../lib/strings.js');

exports.hello = (req, res) => {
  res.status(200).send({ result: strings.sayHello(req.params.string) });
};

exports.upper = (req, res) => {
  res.status(200).send({ result: strings.uppercase(req.params.string) });
};

exports.lower = (req, res) => {
  res.status(200).send({ result: strings.lowercase(req.params.string) });
};

exports.firstChar = (req, res) => {
  res.status(200).send({
    result: strings.firstCharacters(req.params.string, req.query.length || 1),
  });
};
