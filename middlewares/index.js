//optimizar las importaciones

const validarComentario= require('../middlewares/validar_comentario');
const validarEmail= require('../middlewares/validar_email');
const validarJWT=require('../middlewares/validar_jwt')
const validar_Cultivo= require('./validar_cultivo');
const validarProductor= require('../middlewares/validar_productor');
const validarAdmin= require('../middlewares/validar_admin');
const validarUser= require('../middlewares/validar_user')
const validarAuth= require('../middlewares/validar_auth');
const validarRol = require('../middlewares/validar_rol');
 module.exports={

        ...validarComentario,
        ...validarEmail,
        
        ...validarJWT,
        ...validar_Cultivo,
        ...validarProductor,
        ...validarAdmin,
        ...validarUser,
        ... validarAuth,
        ...validarRol
 }