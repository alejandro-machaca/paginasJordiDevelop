'use strict'

//Importacion de modulo de conexion a base de datos
var moongose = require('mongoose');
var app = require('./app');
var port = 3700;

moongose.Promise = global.Promise;
moongose.connect('mongodb://localhost:27017/dbPodaMallorca')
        .then(() => {
            console.log("Conexion a la base de datos establecida con exito...");

            // Cracion del servidor
            app.listen(port, () => {
                console.log("Servidor corriendo correctamente en la url: localhost:3700");
            });
        })
        .catch(err => console.log(err));

