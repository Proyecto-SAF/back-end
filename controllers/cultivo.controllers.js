const ctrlCultivo = {};
const cultivo = require('../models/cultivo')


ctrlCultivo.rutaGetCultivo = async (req,res)=>{

    const cultivoEncontrada = await cultivo.find().populate('userId','nombre_completo');
    res.json(cultivoEncontrada);
};

module.exports = ctrlCultivo;