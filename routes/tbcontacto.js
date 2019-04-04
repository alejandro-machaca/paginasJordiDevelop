'use strict'

var express = require('express');
var tbcontactoController = require('../controllers/tbcontacto');

var router = express.Router();

router.get('/home', tbcontactoController.home);
router.post('/test', tbcontactoController.test);
router.post('/saveTbcontacto', tbcontactoController.saveTbcontacto);
router.get('/getContacto/:id?', tbcontactoController.getTbcontacto);
router.get('/getListContacto', tbcontactoController.getListTbcontactos);
router.put('/updateTbcontacto/:id', tbcontactoController.updateTbcontacto);

module.exports = router; 


