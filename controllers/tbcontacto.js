'use strict'

var tbcontacto = require('../models/tbcontacto');

var controller = {

    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la home'
        });
    },

    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el metodo o accion test del controlador de modContactos'
        });
    },

    //TODO: registrar la fecha en formato fecha y que se registre fecha y hora
    saveTbcontacto: function(req, res){
        var vartbcontacto = new tbcontacto();

        var params = req.body;
        
        vartbcontacto.colContacto = params.colContacto;
        vartbcontacto.colFechaHora = params.colFechaHora;
        vartbcontacto.colTagVisto = params.colTagVisto
        vartbcontacto.colComentarios = params.colComentarios;
        vartbcontacto.colEstado = params.colEstado;

        vartbcontacto.save((err, tbcontactoStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar'});

            if(!tbcontactoStored) return res.status(404).send({message: 'No se ha podido guardar el contacto.'});

            return res.status(200).send({vartbcontacto: tbcontactoStored});
        });
    },

    getTbcontacto: function(req, res){
        var contactId = req.params.id;

        if(contactId == null){
            return res.status(404).send({message: 'El contacto no existe.'});
        }

        tbcontacto.findById(contactId, (err, contacto) => {

            if(err) return res.status(500).send({message: 'Erro al devolver los datos.'});

            if(!contacto) return res.status(404).send({message: 'El contacto no existe.'});

            return res.status(200).send({
                contacto
            });

        });
    },

    //TODO: mostrar solo los activos y por orden de fecha de mayor a menor
    getListTbcontactos: function(req, res){
        tbcontacto.find({}).exec((err, tbcontactos)=>{
            if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

            if(!tbcontactos) return res.status(404).send({message: 'No hay contactos que mostrar.'});

            return res.status(200).send({tbcontactos});
        });
    },

    updateTbcontacto: function(req, res){
        var contactId = req.params.id;
        var update = req.body;

        tbcontacto.findByIdAndUpdate(contactId, update, {new:true}, (err, tbcontactoUpdated) => {
            if(err) return res.status(500).send({message: 'Error al actualizar'});

            if(!tbcontactoUpdated) return res.status(404).send({message: 'No existe el contacto para actualizarlo'});

            return res.status(200).send({tbcontacto: tbcontactoUpdated});
        });
    }

};

module.exports = controller;
