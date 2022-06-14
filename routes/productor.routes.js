const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');

const{
    rutaPost,
    rutaDelete,
    rutaGet, 
    rutaPut, 
    rutaLogicalDelete,
    listarprod
}=  require('../controllers/productor.controllers');

const { body, check } = require('express-validator');

const {
    validar_jwt,
    validacionproductor 
}= require('../middlewares');



//mostrar los productores
router.get('/productor/get',

rutaGet)

//mostrar listado de productores

router.get('/productor/get/listar',

listarprod
)

// agregar productor
router.post('/productor',
[
validar_jwt,
 validacionproductor,
 validarCampos
],rutaPost)



//ruta editar productor
router.put('/productor/:id',
validar_jwt,
validacionproductor,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar productor
router.delete('/productor/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar productor logicamente
router.put('/productor/deleteLogi/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;