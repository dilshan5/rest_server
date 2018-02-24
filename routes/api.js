// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Person = require('../models/person');

// Routes
Person.methods(['get', 'put', 'post', 'delete']);
Person.register(router, '/persons');

// Return router
module.exports = router;