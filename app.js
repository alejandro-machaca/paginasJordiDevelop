'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// rutas
var tbcontacto_routes = require('./routes/tbcontacto');
var tbmensaje_routes = require('./routes/tbmensaje');
// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar cabeceras y CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// rutas base
app.use('/', express.static('client',{redirect:false}));
app.use('/api', tbcontacto_routes);
app.use('/api', tbmensaje_routes);

app.get('*', function(req, res, next){
    res.sendFile(path.resolve('client/index.html'));
});

// exportar
module.exports = app;

