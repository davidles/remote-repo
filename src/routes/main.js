const express = require('express');
const route = express.Router();
const { search, render } = require('../controller/mainController');

/* "/" */
route.get('/', search, render );
// route.get('/', mainController.home );


module.exports = route;