'use strict'

var tbmensaje = require('../models/tbmensaje');

var controller = {
    //TODO: registrar la fecha en formato fecha y que se registre fecha y hora
    saveTbMensaje: function(req, res){
        var varTbMensaje = new tbmensaje();

        var params = req.body;

        varTbMensaje.colNombres = params.colNombres;
        varTbMensaje.colTelefono = params.colTelefono;
        varTbMensaje.colEmail = params.colEmail;
        varTbMensaje.colMensaje = params.colMensaje;
        varTbMensaje.colFechaHora = params.colFechaHora;
        varTbMensaje.colTagVisto = params.colTagVisto;
        varTbMensaje.colComentarios = params.colComentarios;
        varTbMensaje.colEstado = params.colEstado;

        varTbMensaje.save((err, tbmensajeStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar'});

            if(!tbmensajeStored) return res.status(404).send({message: 'No se ha podido guardar mensaje.'});

            return res.status(200).send({varTbMensaje: tbmensajeStored});
        });
    },
    
    getTbmensaje: function(req, res){
        var mensajeId = req.params.id;

        if(mensajeId == null){
            return res.status(404).send({message: 'El mensaje no existe.'});
        }

        tbmensaje.findById(mensajeId, (err, mensaje) => {

            if(err) return res.status(500).send({message: 'Erro al devolver los datos.'});

            if(!mensaje) return res.status(404).send({message: 'El contacto no existe.'});

            return res.status(200).send({
                mensaje
            });

        });
    },

    //TODO: mostrar solo los activos y por orden de fecha de mayor a menor
    getListTbmensajes: function(req, res) {
        tbmensaje.find({}).exec((err, tbmensaje) => {
            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

            if(!tbmensaje) return res.status(404).send({message: 'No hay contactos que mostrar.'});

            return res.status(200).send({tbmensaje});

        });
    },

    updateTbMensaje: function(req, res){
        var mensajeId = req.params.id;
        var update = req.body;

        tbmensaje.findByIdAndUpdate(mensajeId, update, {new:true}, (err, tbmensajeUpdated)=>{
            if(err) return res.status(500).send({message: 'Error al actualizar'});

            if(!tbmensajeUpdated) return res.status(400).send({message: 'No existe el mensaje para actualizarlo.'});

            return res.status(200).send({tbmensaje: tbmensajeUpdated});
        });
    }

};

module.exports = controller;