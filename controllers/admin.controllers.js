const ctrlHome = {};
const Admin = require('../models/admin');
const User=require('../models/users')
 require('../connection');


//ruta get users 
 
ctrlHome.rutaGet = async (req,res)=>{

        const admin= await admin.find().populate('userId','nombre_completo');
        res.json(profesor);
        
}


//ruta get listar users

ctrlHome.listarprod = async (req, res) => {
    const { limite = 5, desde = 0 } = req.query;

    const query = { estado: true };

    const [total, usuarios] = await Promise.all([
        Admin.countDocuments(query),
        Admin.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({ total, usuarios });
};

//ruta agregar users

ctrlHome.rutaPost = async (req,res)=>{
        const body=req.body;
        body.userId = req.usuario._id
        const admin= new admin(body)

        await admin.save();
        res.json({msg: 'adminagregado'})
};

//ruta eliminar users
ctrlHome.rutaDelete = async (req,res)=>{
        const {id}= req.body;

        try{
            await admin.findByIdAndDelete(req.params.id);

            return res.json({msg: 'user removed'})
        } catch(error){
            console.log('error al eliminar user ',error)
        }
}



//ruta editar users
ctrlHome.rutaPut = async (req , res)=>{
        const body=req.body;
        body.userId = req.usuario._id
        const { id } = req.params;
        
        try {
            const admin= await admin.findByIdAndUpdate(id, body);
            return res.json(admin)
        } catch (error) {
            console.log(`error al actulizar usuario: ${error}`)
        }

};


//eliminar profesor logicamente

ctrlHome.rutaLogicalDelete= async (req, res)=>{

        const { id } = req.params;
        try {
            //Verifico que el usuario este activo
            const inactivo = await User.findById(id);

            /* console.log(inactivo) */
            if (!inactivo.admin) {
                return res.json({
                    msg: `El usuario ${id} no existe`
                });
            };

            const usuario = await User.findByIdAndUpdate(id, { admin: false });

            res.json({
                msg: 'Usuario borrado de la base de datos exitosamente',
                usuario
            });
        } catch (error) {
            console.log('Error al borrar los datos del usuario: ', error);
        };
}



module.exports = ctrlHome;