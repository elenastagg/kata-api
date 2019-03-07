const express = require('express');
const strings = require('./lib/strings.js');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).send({ result: strings.sayHello(req.params.string) });
});

module.exports = app;
