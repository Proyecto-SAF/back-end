const { body, check } = require('express-validator');
const {siExistecultivo}= require('./validar_cultivo')
const validacionProductor=
[
   check('descripcion', 'La descripcion ingresada no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty()
    .isLength({ min: 15}),

   check('hectareas', 'Las hectareas ingresadas no contiene un formato correcto')
    .isArray()
    .not()
    .isEmpty(),

   check('cultivo', 'El cultivo ingresado no contiene un formato correcto')
    .isArray()
    .not()
    .isEmpty()
    .custom(siExistecultivo),

  
   
]

module.exports = {
    validacionProductor
}