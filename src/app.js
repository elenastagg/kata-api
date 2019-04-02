const express = require('express');
const stringsRouter = require('./routes/strings.js');
const numbersRouter = require('./routes/numbers.js');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numbersRouter);

module.exports = app;
