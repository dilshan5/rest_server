// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var personSchema = new mongoose.Schema({
    id: 'string',
    name: 'string'
});

// Return model
module.exports = restful.model('Persons', personSchema );