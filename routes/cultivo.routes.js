const routerCultivo =require('express').Router();


const { rutaGetCultivo } = require('../controllers/cultivo.controllers');


routerCultivo.get('/cultivo/get',rutaGetCultivo)


module.exports = routerCultivo;
