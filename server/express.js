const express = require('express');
const admissionRoute = require('./routes/api/admission.route');
const scoreRoute = require('./routes/api/score.route');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/', admissionRoute);
app.use('/', scoreRoute);

module.exports = app;