const express = require('express');
const admissionRoute = require('./routes/admission.route');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/', admissionRoute);

module.exports = app;