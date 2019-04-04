'use strict'

var moongose = require('mongoose');
var Schema = moongose.Schema;

var tbMensajeSchema = Schema({
    "colNombres" : String,
    "colTelefono" : String,
    "colEmail" : String,
    "colMensaje" : String,
    "colFechaHora" : String,
    "colTagVisto" : Number,
    "colComentarios" : String,
    "colEstado" : Number
});

module.exports = moongose.model('tbmensaje',tbMensajeSchema);