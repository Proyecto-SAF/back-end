const Admin = require('../models/admin');

//verificar si en la BD existe el rol ingresado por el usuario
const siExisteadmin = async (admin = '')=> {
    const adminEncontrada = await Admin.findOne({admin})
    if(!adminEncontrada){
        throw new Error('el admin especificado no existe')
    }
}

module.exports = {
    siExisteadmin
}