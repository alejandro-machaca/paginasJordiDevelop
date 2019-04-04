'use strict'

var moongose = require('mongoose');
var Schema = moongose.Schema;

var tbcontactoSchema = Schema({
    "colContacto" : String,
    "colFechaHora" : String,
    "colTagVisto" : Number,
    "colComentarios" : String,
    "colEstado" : Number
});

module.exports = moongose.model('tbcontacto', tbcontactoSchema);