const Cultivo = require('../models/cultivo');

//verificar si en la BD existe el rol ingresado por el usuario
const siExistecultivo = async (cultivo = '')=> {
    const cultivoEncontrada = await Cultivo.findOne({cultivo})
    if(!cultivoEncontrada){
        throw new Error('el cultivo especificado no existe')
    }
}

module.exports = {
    siExistecultivo
}