'use strict'

var express = require('express');
var tbMensajeController = require('../controllers/tbmensaje');

var router = express.Router();

router.post('/saveTbmensaje', tbMensajeController.saveTbMensaje);
router.get('/getTbmensaje/:id?', tbMensajeController.getTbmensaje);
router.get('/getListTbmensaje', tbMensajeController.getListTbmensajes);
router.put('/updateTbmensaje/:id', tbMensajeController.updateTbMensaje);

module.exports = router;

