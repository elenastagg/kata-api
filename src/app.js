const express = require('express');
const strings = require('./lib/strings.js');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).send({ result: strings.sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).send({ result: strings.uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).send({ result: strings.lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).send({
    result: strings.firstCharacters(req.params.string, req.query.length || 1),
  });
});

module.exports = app;
